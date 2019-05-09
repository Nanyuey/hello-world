<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <test v-model="formData"></test>
    {{formData}}
    <infoFlexBox></infoFlexBox>
  </div>
</template>

<script>
import test from './test'
import infoFlexBox from './infoFlexBox'
export default {
  components: {
    infoFlexBox,
    test
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      formData: {
        select1: '',
        select2: '',
        select3: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
