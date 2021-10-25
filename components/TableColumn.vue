<template>
  <div class="column">
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
    <TableItem />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.column {
  width: calc(100% - 5px);
  padding: 5px 2.5px;
  height: 360px;
  background-color: rgba($color: #000, $alpha: 0.6);
  
  &:first-child {
    border-radius: 3px 0 0 3px;
    padding-left: 5px;
    width: calc(100% - 7.5px);
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
    padding-right: 5px;
    width: calc(100% - 7.5px);
  }
}
</style>