import React from 'react'
import HomeArticle from '../components/Home/home_hero'
import Layout from '../components/layout'
import HomeStats from '../components/Home/home_stats'
import HomeMeals from '../components/Home/home_meals'
import HomeFeed from '../components/Home/home_feed'
import HomeGo from '../components/Home/home_go'

const Home = () => {
  return (
    <div>
        <Layout>
          <HomeArticle/>
          <HomeStats/>
          <HomeMeals/>
          <HomeFeed/>
          <HomeGo/>
        </Layout>
    </div>
  )
}

export default Home