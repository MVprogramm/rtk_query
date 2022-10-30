import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6275fcfd15458100a6a9c207.mockapi.io/api/v1",
  }),
  endpoints: (builder) => ({
    tasks: builder.query({
      query: () => "/todo",
      providesTags: ["Task"],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/todo",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/todo/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: (taskId) => ({
        url: `/todo/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
