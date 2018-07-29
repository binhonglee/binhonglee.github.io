<template>
  <div class="contacts">
    <h2 style="color: #ffffff;" class="section-heading">Contact me</h2>
    <p>
      <i class="far fa-envelope"></i><br/>
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
@import url('../../font-awesome/css/all.css');
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
  font-size: 40px;
}

.emails {
  font-size: 18px;
}
</style>
