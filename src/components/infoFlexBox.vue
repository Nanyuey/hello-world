<template>
  <div class="info-box__wrap">
    <div class="info-box__cell"
      v-for="info in infoList"
      :key="info.value">
      <div class="cell__head"
        v-text="info.label"></div>
      <div class="cell__content"
        v-text="dataSource[info.value]"
        :style="info.style?info.style:''"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // infoList: {
    //   type: Array,
    //   default: () => []
    // }
  },
  data() {
    return {
      dataSource: {
        soId: '12123132132',
        date: '2019-04-19',
        state: '部分上架',
        type: '货主通知'
      },
      infoList: [
        { label: 'SO编号', value: 'soId' },
        {
          label: '单据日期',
          value: 'date'
        },
        {
          label: '状态',
          value: 'state',
          style: {
            color: 'red'
          }
        },
        { label: 'ASN类型', value: 'type' }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.info-box__ {
  &wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &cell {
    height: 40px;
    box-sizing: border-box;
    width: 33.3%;
    display: flex;
    align-items: center;
    border-right: 1px solid;
    border-bottom: 1px solid;
    &:nth-child(3n + 1) {
      border-left: 1px solid;
    }
    &:nth-child(-n + 3) {
      border-top: 1px solid;
    }
  }
}
.cell__ {
  &head {
    height: 100%;
    line-height: 40px;
    flex: 1;
    background-color: #dcdcdc;
  }
  &content {
    flex: 2;
  }
}
</style>
