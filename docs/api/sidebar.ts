import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/tasks-api",
    },
    {
      type: "category",
      label: "tasks",
      link: {
        type: "doc",
        id: "api/tasks",
      },
      items: [
        {
          type: "doc",
          id: "api/get-all-tasks",
          label: "Get all tasks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-task",
          label: "Create a new task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-task-by-id",
          label: "Get task by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-task",
          label: "Update task by ID",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/delete-task",
          label: "Delete task by ID",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
