<script setup lang="ts">

interface RadioButtonProps {
  modelValue: string;
  value: string;
  label: string;
}

const props = defineProps<RadioButtonProps>();
const emit = defineEmits(['update:modelValue']);

const onChange = (event: Event) => {
  emit('update:modelValue', props.value);
};
</script>

<template>
  <div class="radio-button">
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      @change="onChange"
      class="radio-input"
      :class="{'radio-input--checked': modelValue === value, 'radio-input--unchecked': modelValue !== value}"
      id="radio-{{value}}"
    />
    <label @click="onChange" :for="'radio-' + value" class="radio-label">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
.radio-button {
  display: flex;
  align-items: center;
  margin: 0.5em 0;
}

.radio-input {
  appearance: none;
  width: 1.5em;
  height: 1.5em;
  border: 1px solid $secondary;
  border-radius: 50%;
  position: relative;
  margin-right: 0.5em;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.radio-input:checked::before {
  content: '';
  display: block;
  width: 0.8em;
  height: 0.8em;
  background-color: $secondary;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.radio-input--unchecked {
  border-color: #ccc;
}

.radio-input:focus {
  outline: none;
  border-color: $secondary;
}

.radio-label {
  cursor: pointer;
  font-size: 1rem;
  color: #333;
}
</style>
