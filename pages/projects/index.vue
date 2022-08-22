<script setup lang="ts">
const projects: Blog.Project[] = [
  {
    id: '1',
    title: 'Project 1',
    synopsis: 'This is a project',
    body: 'This is the body of project 1',
    images: [
      {
        id: '1',
        url: 'https://via.placeholder.com/600x400',
        alt: 'Project 1'
      }
    ],
    url: 'https://example.com/project-1',
    status: 'published',
    createdAt: new Date(),
    updatedAt: new Date()
  },
] 
</script>

<template lang="pug">
.projects-page
  h1 Projects
  ul.projects-page__projects
    li.projects-page__projects-item(v-for = "project in projects")
      ProjectCard.projects-page__project(
        :project="project"
      )
</template>

<style lang="scss">
.projects-page {
  margin: 100px;
  &__projects {
  }
}
</style>