<template>
  <div class="detail-view has-header">
    <banner title="每天看点好内容"></banner>
    <template v-if="!showLoading">
      <div class="info">
        <h2>
          {{eventItem.title}}
          <span class="badge">{{eventItem.loc_name}}</span>
        </h2>
        <div class="poster">
          <img :src="eventItem.image_hlarge" alt="">
        </div>
        <div class="detail">
          <span>时间:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.begin_time}}</li>
            <li>{{eventItem.end_time}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>地点:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.address}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>费用:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.fee_str}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>类型:&nbsp;&nbsp;</span>
          <ul>
            <li>{{eventItem.category_name}}</li>
          </ul>
        </div>
        <div class="detail">
          <span>起始时间:&nbsp;&nbsp;</span>
          <ul>
            <li v-if="eventItem.owner">{{eventItem.owner.name}}</li>
          </ul>
        </div>
        <tags v-if="eventItem.tags" :items="eventItem.tags | toArray"></tags>
        <div class="describe">
          <h2>活动详情</h2>
          <div v-if="eventItem.content" class="content" v-html="content"></div>
        </div>
      </div>
      <download-app></download-app>
    </template>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from './components/banner'
import Tags from './components/tags'
import DownloadApp from './components/downloadApp'
import Loading from '../home/components/loading'

export default {
  name: 'detail-view',
  components: { Banner, Tags, DownloadApp, Loading },
  data () {
    return {
      showLoading: true
    }
  },
  filters: {
    toArray (value) {
      return value.split(',')
    }
  },
  computed: {
    content: function () {
      // Careful XSS
      // Remove copyright imgs
      return this.eventItem.content.replace(/<img.+?>/ig, '')
    },
    // Getting Vuex State from store/modules/activities
    ...mapState({
      eventItem: state => state.activities.eventItem
    })
  },
  created () {
    // Getting route params
    const id = this.$route.params.id

    // Dispatching getSingleEvent
    this.$store.dispatch({
      type: 'getSingleEvent',
      id: id
    }).then(res => {
      // Success handle
      this.showLoading = false
    })
  }
}
</script>

<style lang="scss" scoped>
.info {
  margin: .1rem;

  h2 {
    margin: .2rem 0;
    color: #494949;
    font-size: .24rem;
    line-height: .32rem;
  }

  .badge {
    display: inline-block;
    padding: 0.01rem 0.05rem;
    margin-bottom: 0.03rem;
    vertical-align: middle;
    line-height: .18rem;
    font-size: .12rem;
    color: #fff;
    background-color: #FF8263;
    border-radius: 0.02rem;
  }

  .poster {
    margin: .2rem auto;
    text-align: center;

    img {
      width: 100%;
      max-width: 2.2rem;
      height: auto;
    }
  }
}

.detail {
  margin-left: .33rem;
  margin-bottom: .1rem;
  font-size: .16rem;
  line-height: .2rem;
  clear: left;

  span {
    float: left;
    margin-left: -.33rem;
    color: #666666;
  }

  ul {
    list-style-position: outside;
    margin-left: 0;
    li{
        padding-left: .2rem;
    }
  }
}

.describe {
  h2 {
    color: #072;
  }

  .content {
    overflow: hidden;
    font-size: .16rem;
    line-height: .2rem;
  }
}

</style>
