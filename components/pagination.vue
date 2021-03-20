<template>
<div class="pagenation">
    <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="pageSizeClick" :current-page="currentPage" :page-size="pageSize" :total="pageTotal" :page-sizes="[1, 5, 10]" layout="total, sizes, prev, pager, next, jumper"></el-pagination>
    </div>
</div>
</template>

<script>
export default {
    name: 'pagenation',
    props: ['pageSizes', 'pageTotals', 'clearCurrentPage'],
    data() {
        return {
            currentPage: 1, //当前页码
            pageSize: 5, //显示几条一页
            pageTotal: 20, //总共页数
        }
    },
    created() {
        this.pageSize = this.pageSizes //几条一页
        this.pageTotal = this.pageTotals //总页数
    },
    watch: {
        // 监听清除页码   跳转到第一页
        clearCurrentPage(newVal, oldVal) {
            if (newVal != oldVal) {
                this.currentPage = 1
            }
        },
        // 总页码变了  页码跟着变动
        pageTotals(newVal, oldVal) {
            if (newVal != oldVal) {
                this.pageTotal = this.pageTotals
            }
        }
    },
    methods: {
        // 几页一条
        handleSizeChange(val) {
            this.$emit('PageSizeChange', val)
        },
        // 点击页码
        pageSizeClick(val) {
            this.$emit('PageNumChange', val)
        },
    },
}
</script>

<style scoped>

</style>
