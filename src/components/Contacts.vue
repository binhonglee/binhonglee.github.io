<template>
  <div class="contacts">
    <h2 style="color: #ffffff;" class="section-heading">Contact me</h2>
    <p>
      <a href="mailto:binhong%40binhong.me"><i class="fa fa-envelope-o"/></a>
      <a href="mailto:binhong%40binhong.me" class="emails">binhong@binhong.me</a>
      <a href="mailto:binhong.lee%40asu.edu"><i class="fa fa-envelope-o"/></a>
      <a href="mailto:binhong.lee%40asu.edu" class="emails">binhong.lee@asu.edu</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'contacts'
}
</script>

<style scoped>
.contacts {
  width: 100%;
  padding-top: 25px;
  padding-bottom: 5px;
  background-color: #000000;
}

i,
a {
  color: #ffffff;
}

i {
  font-size: 25px;
}

.emails {
  font-size: 18px;
  padding-right: 20px;
}
</style>
