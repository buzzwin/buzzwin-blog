export default {
  post(id) {
    return {
      path: `/object/${id}`,
      resolve: (response, mappers) => {
        let { title, content, created_at, metadata } = response.object
        let meta = {
          description: metadata.description,
          published: created_at,
          author: metadata.author.title,
          destination: metadata.destination,
          network_name: metadata.network_name
        }
        return mappers.merge({ title, content, ...meta })
      }
    }
  }
}
