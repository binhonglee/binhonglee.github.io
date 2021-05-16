<template>
  <div class="contacts">
    <h2 style="color: #ffffff" class="section-heading">Contact me</h2>
    <p>
      <a href="https://pgp.mit.edu/pks/lookup?op=get&search=0x6B4C5608EC620D19">
        <i class="fas fa-key"></i>
      </a>
      <a href="mailto:binhong%40binhong.me" class="emails">
        <i class="far fa-envelope"></i>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "contacts",
};
</script>

<style scoped>
@import url("../../node_modules/@fortawesome/fontawesome-free/css/all.css");
.contacts {
  width: 100%;
  padding-top: 25px;
  padding-bottom: 20px;
  background-color: #000000;
}

i {
  color: #ffffff;
  font-size: 40px;
  margin-right: 10px;
  margin-left: 10px;
}

.emails {
  font-size: 18px;
}
</style>
