<template>
  <div id="uerManagePage">
    <a-input-search
      style="max-width: 320px"
      v-model:value="searchValue"
      placeholder="输入用户名搜索"
      enter-button="搜索"
      size="large"
      @search="onSearch"
    />

    <a-table :columns="columns" :data-source="data">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span>
            <smile-outlined />
            Name
          </span>
        </template>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>
        <template v-else-if="column.key === 'tags'">
          <span>
            <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="
                tag === 'loser'
                  ? 'volcano'
                  : tag.length > 5
                  ? 'geekblue'
                  : 'green'
              "
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
            <template v-if="column.dataIndex === 'avatarUrl'">
          <a-image :src="record.avatarUrl" :width="120" />
        </template>
        <template v-else-if="column.dataIndex === 'userRole'">
          <div v-if="record.userRole === 1">
            <a-tag color="green">管理员</a-tag>
          </div>
          <div v-else>
            <a-tag color="blue">普通用户</a-tag>
          </div>
        </template>
        <template v-if="column.dataIndex === 'createTime'">
          {{ dayjs(record.createTime).format("YYYY-MM-DD HH:mm:ss") }}
        </template>
        <template v-else-if="column.key === 'action'">
          <a-button danger  @click ="doDelete(record.id)">删除</a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style scoped>
#uerManagePage {
}
</style>
<script setup lang="ts">
import dayjs from "dayjs";
import { ref } from "vue";
import { deleteUser, searchUsers } from "@/api/user";
import { message } from "ant-design-vue";

const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "用户名",
    dataIndex: "username",
  },
  {
    title: "账号",
    dataIndex: "userAccount",
  },
  {
    title: "头像",
    dataIndex: "avatarUrl",
  },
  {
    title: "性别",
    dataIndex: "gender",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "用户角色",
    dataIndex: "userRole",
  },
  {
    title: "操作",
    key: "action",
  },
];

// 数据
const data = ref([]);



// 删除数据
const doDelete = async (id: string) => {
  if (!id) {
    return;
  }
  const res = await deleteUser(id);
  if (res.data.code === 0) {
    message.success("删除成功");
  } else {
    message.error("删除失败");
  }
};


// 获取数据
const fetchData = async (username = "") => {
  const res = await searchUsers(username);
  if (res.data.data) {
    data.value = res.data.data || [];
  } else {
    message.error("获取数据失败");
  }
};
const searchValue = ref();
const onSearch = () => {
  fetchData(searchValue.value);
};

fetchData();

</script>
