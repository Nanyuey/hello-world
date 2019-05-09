<template>
  <div>
    <el-select @change="onSelectChange"
      v-model="copyFormData.select1">
      <el-option v-for="item in selection1"
        :key="item.value"
        :label="item.label"
        :value="item.value"></el-option>
    </el-select>
    <el-select @change="onSelectChange"
      v-model="copyFormData.select2">
      <el-option v-for="item in selection2"
        :key="item.value"
        :label="item.label"
        :value="item.value"></el-option>
    </el-select>
    <el-select @change="onSelectChange"
      v-model="copyFormData.select3">
      <el-option v-for="item in selection3"
        :key="item.value"
        :label="item.label"
        :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  model: {
    event: 'change',
    prop: 'formData'
  },
  props: {
    formData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      selection1: [{ label: 1, value: 1 }, { label: 2, value: 2 }],
      selection2: [{ label: 10, value: 10 }, { label: 20, value: 20 }],
      selection3: [{ label: 100, value: 100 }, { label: 200, value: 200 }],
      copyFormData: {
        select1: '',
        select2: '',
        select3: ''
      }
    }
  },
  created() {
    this.copyFormData = JSON.parse(JSON.stringify(this.formData))
  },
  methods: {
    onSelectChange() {
      this.$emit('change', this.copyFormData)
    }
  }
}
</script>

<style>
</style>
