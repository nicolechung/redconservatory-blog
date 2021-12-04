<template>
    <div>
        <div v-for="article in articles">
            <h2>
                <router-link :to="article.path">
                    {{ article.frontmatter.title }}
                </router-link>
            </h2>
            <p>{{ article.frontmatter.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        articles() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/articles/') && !x.frontmatter.article_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>
