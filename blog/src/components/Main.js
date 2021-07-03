import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { posts } from "../data/Data";
import Markdown from "markdown-to-jsx";

export default function Main({ title }) {
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
          {posts.map((post) => (
          // markdown style jsx render krne k lie
        <Markdown key={post.body}>{post.body}</Markdown>
      ))}
    </Grid>
  );
}
