---
sidebar_position: 1
---

# Tasks API Documentation

Welcome to the **Tasks API** documentation! This is a simple REST API for managing tasks/todos built with the [NestJS](https://nestjs.com/) framework.

## Getting Started

This API allows you to perform CRUD operations on tasks. You can:

- ✅ Create new tasks
- 📋 Read all tasks or get specific tasks by ID
- ✏️ Update existing tasks
- 🗑️ Delete tasks

## Quick Overview

The API provides the following endpoints:

- `GET /tasks` - Retrieve all tasks
- `GET /tasks/:id` - Get a specific task by ID
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update an existing task
- `DELETE /tasks/:id` - Delete a task

## API Reference

Check out the [API Reference](/docs/api) section for detailed information about each endpoint, including request/response schemas and examples.

## Running the API

To run the NestJS API server:

```bash
# Install dependencies
npm install

# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

The API will be available at `http://localhost:3000`.
