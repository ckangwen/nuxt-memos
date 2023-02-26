<template>
  <aside
    sticky
    top-0
    flex="~ col shrink-0"
    justify-start
    items-start
    h-auto
    h-full
    max-h-screen
    m="l-2"
    p="y-4 l-2 r-3"
    box-border
    overflow="x-hidden y-auto"
    overscroll-contain
    hide-scrollbar
    bg-base
  >
    <!-- banner -->
    <div
      class="flex flex-row justify-between items-center relative w-full h-auto px-3 flex-nowrap shrink-0"
    >
      <div
        class="px-2 py-1 max-w-full flex flex-row justify-start items-center cursor-pointer rounded hover:shadow hover:bg-white"
      >
        <div class="w-8 h-8 rounded-full bg-gray-100">
          <img
            class="w-full h-auto min-w-full min-h-full object-cover"
            src="https://s2.loli.net/2023/01/12/a4ImQMsgHkbxtJL.jpg"
            alt=""
          />
        </div>
        <span class="px-1 text-lg font-medium text-slate-800 shrink truncate"> Hello </span>
      </div>
    </div>
    <div class="flex flex-row justify-between items-start w-full px-6 select-none shrink-0 pb-2">
      <div class="stat-item">
        <span hover="text-[#5f5f5f]" class="stat-item-value"> 15 </span>
        <span class="stat-item-label">MEMOS</span>
      </div>
      <div class="stat-item">
        <span hover="text-[#5f5f5f]" class="stat-item-value"> 3 </span>
        <span class="stat-item-label">TAGS</span>
      </div>
      <div class="stat-item">
        <span hover="text-[#5f5f5f]" class="stat-item-value"> 1 </span>
        <span class="stat-item-label">DAYS</span>
      </div>
    </div>
    <!-- heat map -->
    <UsageHeatMap />
    <div flex="~ col shrink-0" justify-start items-start text="sm" m="t-2 b-3" w-full>
      <button hover="bg-active" class="sidebar-item">
        <span class="mr-1">📅 每日回顾</span>
      </button>
      <button hover="bg-active" class="sidebar-item">
        <span class="mr-1">🗂️ 资源库</span>
      </button>
    </div>
    <!-- 全部标签 -->
    <div m="t-5" w-full>
      <div text="sm primary" p="l-4">全部标签</div>
      <div m="t-3">
        <button hover="bg-active" class="sidebar-item">
          <span class="mr-1"># TAG1</span>
        </button>
        <button hover="bg-active" class="sidebar-item">
          <span class="mr-1"># TAG2</span>
        </button>
      </div>
    </div>
  </aside>
</template>

<style>
.stat-item {
  @apply: flex flex-col justify-start items-start;
}
.stat-item-label {
  @apply: text-[#9d9d9d] text-xs;
}
.stat-item-value {
  @apply: text-[#9d9d9d] font-bold text-2xl leading-10;
}
.sidebar-item {
  @apply: w-full text-left pl-4 leading-10 rounded cursor-pointer text-secondary text-sm;
}
</style>
