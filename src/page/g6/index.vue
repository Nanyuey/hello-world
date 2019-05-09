<template>
  <div>
    <tool-bar></tool-bar>
    <div id="mountNode"></div>
  </div>
</template>

<script>
import toolBar from './toolBar'
import G6 from '@antv/g6'
export default {
  components: {
    toolBar
  },
  data() {
    return {
      graph: null,
      content: {
        nodes: [
          {
            id: 'node1',
            x: 100,
            y: 200
          },
          {
            id: 'node2',
            x: 300,
            y: 200
          }
        ],
        edges: [
          {
            source: 'node1',
            target: 'node2'
          }
        ]
      }
    }
  },
  mounted() {
    this.behavior()
    this.graph = new G6.Graph({
      container: 'mountNode',
      width: 500,
      height: 500
    })
    this.graph.addBehaviors('click-add-edge')
    this.graph.data(this.content)
    this.graph.render()
  },
  methods: {
    behavior() {
      return G6.registerBehavior('click-add-edge', {
        getEvents() {
          return {
            'node:click': 'onClick',
            mousemove: 'onMousemove'
          }
        },
        onClick(ev) {
          const node = ev.item
          const graph = this.graph
          const point = { x: ev.x, y: ev.y }
          const model = node.getModel()
          // 如果在添加边的过程中，再次点击另一个节点，结束边的添加
          if (this.addingEdge && this.edge) {
            graph.updateItem(this.edge, {
              target: model.id
            })
            this.edge = null
            this.addingEdge = false
          } else {
            // 点击节点，触发增加边
            this.edge = graph.addItem('edge', {
              source: model.id,
              target: point
            })
            this.addingEdge = true
          }
        },
        onMousemove(ev) {
          const point = { x: ev.x, y: ev.y }
          if (this.addingEdge && this.edge) {
            // 增加边的过程中，移动时边跟着移动
            this.graph.updateItem(this.edge, {
              target: point
            })
          }
        }
      })
    }
  }
}
</script>

<style>
</style>
