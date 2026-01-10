<template>
  <div class="flex flex-col gap-6">
    <!-- Success State -->
    <div
      v-if="isSuccess"
      class="flex flex-col items-center gap-6 py-12 text-center"
    >
      <div class="text-6xl">✓</div>
      <h2 class="text-2xl font-bold text-bright">Message Sent!</h2>
      <p class="text-lg text-secondary">
        Thanks for reaching out. I'll get back to you soon.
      </p>
    </div>

    <!-- Form State -->
    <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-6">
      <!-- Name Field -->
      <div class="flex flex-col gap-2">
        <label for="name" class="text-lg font-bold">
          Name <span class="text-primary">*</span>
        </label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          class="rounded border-2 bg-dark p-2 text-bright transition-colors"
          :class="
            hasSubmitted && formErrors.name
              ? 'border-primary focus:border-primary focus:outline-none'
              : 'border-gray-600 focus:border-accent focus:outline-none'
          "
          placeholder="Your name"
        />
        <p v-if="hasSubmitted && formErrors.name" class="text-sm text-primary">
          {{ formErrors.name }}
        </p>
      </div>

      <!-- Email Field -->
      <div class="flex flex-col gap-2">
        <label for="email" class="text-lg font-bold">
          Email <span class="text-primary">*</span>
        </label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          class="rounded border-2 bg-dark p-2 text-bright transition-colors"
          :class="
            hasSubmitted && formErrors.email
              ? 'border-primary focus:border-primary focus:outline-none'
              : 'border-gray-600 focus:border-accent focus:outline-none'
          "
          placeholder="your.email@example.com"
        />
        <p
          v-if="hasSubmitted && formErrors.email"
          class="text-sm text-primary"
        >
          {{ formErrors.email }}
        </p>
      </div>

      <!-- Phone Field (Optional) -->
      <div class="flex flex-col gap-2">
        <label for="phone" class="text-lg font-bold">
          Phone
          <span class="text-sm font-normal text-gray-400">(optional)</span>
        </label>
        <input
          id="phone"
          v-model="formData.phone"
          type="tel"
          class="rounded border-2 bg-dark p-2 text-bright transition-colors"
          :class="
            hasSubmitted && formErrors.phone
              ? 'border-primary focus:border-primary focus:outline-none'
              : 'border-gray-600 focus:border-accent focus:outline-none'
          "
          placeholder="(555) 123-4567"
        />
        <p
          v-if="hasSubmitted && formErrors.phone"
          class="text-sm text-primary"
        >
          {{ formErrors.phone }}
        </p>
      </div>

      <!-- Message Field -->
      <div class="flex flex-col gap-2">
        <label for="message" class="text-lg font-bold">
          Message <span class="text-primary">*</span>
        </label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="6"
          class="resize-none rounded border-2 bg-dark p-2 text-bright transition-colors"
          :class="
            hasSubmitted && formErrors.message
              ? 'border-primary focus:border-primary focus:outline-none'
              : 'border-gray-600 focus:border-accent focus:outline-none'
          "
          placeholder="Your message..."
        ></textarea>
        <p
          v-if="hasSubmitted && formErrors.message"
          class="text-sm text-primary"
        >
          {{ formErrors.message }}
        </p>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="rounded px-4 py-2 font-bold text-bright transition-opacity"
        :class="
          isSubmitting
            ? 'cursor-not-allowed bg-gray-600 opacity-50'
            : 'bg-primary hover:opacity-90'
        "
      >
        {{ isSubmitting ? "Sending..." : "Send Message" }}
      </button>

      <!-- Submit Error Message -->
      <p v-if="submitError" class="text-sm text-primary">
        {{ submitError }}
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
// Form data
const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

// Form validation errors
const formErrors = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

// Form state
const hasSubmitted = ref(false);
const isSubmitting = ref(false);
const isSuccess = ref(false);
const submitError = ref("");

// Validation functions
function validateName(name: string): string {
  if (!name?.trim()) return "Name is required";
  if (name.trim().length < 2) return "Name must be at least 2 characters";
  return "";
}

function validateEmail(email: string): string {
  if (!email?.trim()) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return "";
}

function validatePhone(phone: string): string {
  // Optional field - only validate if provided
  if (phone?.trim()) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone)) return "Please enter a valid phone number";
  }
  return "";
}

function validateMessage(message: string): string {
  if (!message?.trim()) return "Message is required";
  if (message.trim().length < 10)
    return "Message must be at least 10 characters";
  return "";
}

function validateForm(): boolean {
  formErrors.value = {
    name: validateName(formData.value.name),
    email: validateEmail(formData.value.email),
    phone: validatePhone(formData.value.phone),
    message: validateMessage(formData.value.message),
  };

  return Object.values(formErrors.value).every((error) => error === "");
}

// Form submission
async function handleSubmit() {
  hasSubmitted.value = true;

  // Validate form
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  submitError.value = "";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "1d382823-5293-4695-8d53-96b0536abb71",
        name: formData.value.name.trim(),
        email: formData.value.email.trim(),
        phone: formData.value.phone.trim(),
        message: formData.value.message.trim(),
      }),
    });

    const result = await response.json();

    if (result.success) {
      isSuccess.value = true;
    } else {
      submitError.value = "Failed to send message. Please try again.";
    }
  } catch (error) {
    console.error("Form submission error:", error);
    submitError.value =
      "Network error. Please check your connection and try again.";
  } finally {
    isSubmitting.value = false;
  }
}

</script>
