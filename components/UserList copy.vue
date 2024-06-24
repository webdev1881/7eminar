<script setup lang="ts">
const handleButtonClick = (event: Event) => {
  console.log("Button clicked!", event);
};

const inputValue = ref("");
const filledValue = ref("Hello world");
const errorValue = ref("Hello world");

const selectedValue = ref("Frontend developer");

const file1 = ref<File | null>(null);
const file2 = ref<File | null>(new File([""], "Item"));
const file3 = ref<File | null>(new File([""], "Item"));
</script>

<template>
  <div class="user-list">
    <div class="test">Lorem ipsum dolor sit</div>
    <h1>123</h1>

    <UiToolTip :text=inputValue />

    <UiButton :disabled="true" @click="handleButtonClick"> Normal </UiButton>

    <UiLoader />

    <div class="inputs">
      <UiInput
        v-model="inputValue"
        label="Label"
        placeholder="Placeholder"
        helperText="Helper text"
      />
      <UiInput
        v-model="filledValue"
        label="Label"
        placeholder="Placeholder"
        helperText="Helper text"
      />
      <UiInput
        v-model="errorValue"
        label="Label"
        placeholder="Placeholder"
        helperText="Helper text"
        :error="true"
        errorText="Error text"
      />
    </div>

    <div class="radios">
      {{ selectedValue }}
      <UiRadioButton
        v-model="selectedValue"
        value="Frontend developer"
        label="Frontend developer"
      />
      <UiRadioButton
        v-model="selectedValue"
        value="Backend developer"
        label="Backend developer"
      />
      <UiRadioButton
        v-model="selectedValue"
        value="Designer"
        label="Designer"
      />
      <UiRadioButton v-model="selectedValue" value="QA" label="QA" />
    </div>

    <div class="upload">
      <UiUpload
        v-model="file1"
        label="Upload"
        placeholder="Upload your photo"
      />
      <UiUpload v-model="file2" label="Upload" placeholder="Item" />
      <UiUpload
        v-model="file3"
        label="Upload"
        placeholder="Item"
        :error="true"
        errorText="Error text"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-list {
  width: 100%;
}
.test {
  margin-top: 35px;
}
.upload {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .user-list {
    padding: 0 60px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .user-list {
    padding: 0 32px;
  }
}
@media (max-width: 767px) {
  .user-list {
    padding: 0 16px;
  }
}
</style>
