<template>
  <header>
    <div class="tw-container tw-mx-auto">
      <ul class="tw-flex tw-justify-end">
        <li>Blog</li>
        <li>Case Study</li>
        <li>
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </li>
        <li>
          <font-awesome-icon :icon="['fab', 'github']" />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
