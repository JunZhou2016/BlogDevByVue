<style scoped>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
<template>
    <div>
        <article id="post-SpringBoot中Session监听器的使用" class="article article-type-post " itemscope="" itemprop="blogPost">
  <div class="article-inner">
    
      <header class="article-header">
        
  
    <h1 class="article-title" itemprop="name">
      SpringBoot中Session监听器的使用
    </h1>
  

        
        <a href="/2018/09/09/SpringBoot中Session监听器的使用/" class="archive-article-date">
  	<time datetime="2018-09-09T10:08:21.924Z" itemprop="datePublished"><i class="icon-calendar icon"></i>2018-09-09</time>
</a>
        
      </header>
    
    <div class="article-entry" itemprop="articleBody">
      
        <p>当需要统计应用的试试在线人数的时候，统计成功登录后创建的session的数量是最为准确的数据。SpringBoot通过SessionListener可以很方便的监听session的生命周期。在SpringBoot中监听session的步骤如下：<br>1、创建session监听器.</p>
<figure class="highlight plain"><table><tbody><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div><div class="line">9</div><div class="line">10</div><div class="line">11</div><div class="line">12</div><div class="line">13</div><div class="line">14</div><div class="line">15</div><div class="line">16</div><div class="line">17</div><div class="line">18</div><div class="line">19</div><div class="line">20</div><div class="line">21</div><div class="line">22</div><div class="line">23</div><div class="line">24</div><div class="line">25</div><div class="line">26</div><div class="line">27</div><div class="line">28</div><div class="line">29</div><div class="line">30</div><div class="line">31</div><div class="line">32</div><div class="line">33</div><div class="line">34</div><div class="line">35</div><div class="line">36</div><div class="line">37</div><div class="line">38</div><div class="line">39</div><div class="line">40</div><div class="line">41</div><div class="line">42</div><div class="line">43</div><div class="line">44</div><div class="line">45</div><div class="line">46</div><div class="line">47</div><div class="line">48</div><div class="line">49</div><div class="line">50</div><div class="line">51</div><div class="line">52</div><div class="line">53</div><div class="line">54</div><div class="line">55</div><div class="line">56</div><div class="line">57</div><div class="line">58</div><div class="line">59</div><div class="line">60</div><div class="line">61</div><div class="line">62</div><div class="line">63</div><div class="line">64</div><div class="line">65</div><div class="line">66</div><div class="line">67</div><div class="line">68</div><div class="line">69</div><div class="line">70</div><div class="line">71</div><div class="line">72</div><div class="line">73</div><div class="line">74</div><div class="line">75</div></pre></td><td class="code"><pre><div class="line">package com.sds.listenner;</div><div class="line"></div><div class="line">import java.util.HashSet;</div><div class="line"></div><div class="line">import javax.servlet.ServletContext;</div><div class="line">import javax.servlet.annotation.WebListener;</div><div class="line">import javax.servlet.http.HttpSession;</div><div class="line">import javax.servlet.http.HttpSessionAttributeListener;</div><div class="line">import javax.servlet.http.HttpSessionBindingEvent;</div><div class="line">import javax.servlet.http.HttpSessionEvent;</div><div class="line">import javax.servlet.http.HttpSessionListener;</div><div class="line"></div><div class="line">@WebListener</div><div class="line">public class SessionListener implements HttpSessionListener, HttpSessionAttributeListener {</div><div class="line"></div><div class="line">	public Logger logger = new Logger();</div><div class="line"></div><div class="line">	@Override</div><div class="line">	public void attributeAdded(HttpSessionBindingEvent httpSessionBindingEvent) {</div><div class="line">		logger.info("--attributeAdded--");</div><div class="line">		@SuppressWarnings("unused")</div><div class="line">		HttpSession session = httpSessionBindingEvent.getSession();</div><div class="line">		logger.info("key----:" + httpSessionBindingEvent.getName());</div><div class="line">		logger.info("value---:" + httpSessionBindingEvent.getValue());</div><div class="line"></div><div class="line">	}</div><div class="line"></div><div class="line">	@Override</div><div class="line">	public void attributeRemoved(HttpSessionBindingEvent httpSessionBindingEvent) {</div><div class="line">		logger.info("--attributeRemoved--");</div><div class="line">	}</div><div class="line"></div><div class="line">	@Override</div><div class="line">	public void attributeReplaced(HttpSessionBindingEvent httpSessionBindingEvent) {</div><div class="line">		logger.info("--attributeReplaced--");</div><div class="line">	}</div><div class="line"></div><div class="line">	@Override</div><div class="line">	public void sessionCreated(HttpSessionEvent event) {</div><div class="line">		logger.info("---sessionCreated----");</div><div class="line">		HttpSession session = event.getSession();</div><div class="line">		ServletContext application = session.getServletContext();</div><div class="line">		// 在application范围由一个HashSet集保存所有的session</div><div class="line">		@SuppressWarnings("unchecked")</div><div class="line">		HashSet&lt;HttpSession&gt; sessions = (HashSet&lt;HttpSession&gt;) application.getAttribute("sessions");</div><div class="line">		if (sessions == null) {</div><div class="line">			sessions = new HashSet&lt;HttpSession&gt;();</div><div class="line">			application.setAttribute("sessions", sessions);</div><div class="line">		}</div><div class="line">		// 新创建的session均添加到HashSet集中</div><div class="line">		sessions.add(session);</div><div class="line">		// 可以在别处从application范围中取出sessions集合</div><div class="line">		// 然后使用sessions.size()获取当前活动的session数，即为“在线人数”</div><div class="line">		</div><div class="line">		//添加新建的session到MySessionContext中;</div><div class="line">		MySessionContext.AddSession(event.getSession());</div><div class="line">	}</div><div class="line"></div><div class="line">	@Override</div><div class="line">	public void sessionDestroyed(HttpSessionEvent event) throws ClassCastException {</div><div class="line">		logger.info("---sessionDestroyed----");</div><div class="line">		HttpSession session = event.getSession();</div><div class="line">		logger.info("deletedSessionId: " + session.getId());</div><div class="line">		System.out.println(session.getCreationTime());</div><div class="line">		System.out.println(session.getLastAccessedTime());</div><div class="line">		ServletContext application = session.getServletContext();</div><div class="line">		HashSet&lt;?&gt; sessions = (HashSet&lt;?&gt;) application.getAttribute("sessions");</div><div class="line">		// 销毁的session均从HashSet集中移除</div><div class="line">		sessions.remove(session);</div><div class="line">		</div><div class="line">		//添加新建的session到MySessionContext中;</div><div class="line">        MySessionContext.DelSession(session);</div><div class="line">	}</div><div class="line"></div><div class="line">}</div></pre></td></tr></tbody></table></figure>
<p>2、创建session处理工具类，里面需要一个静态的HashMap存储应用中登录后创建的有效的session.</p>
<figure class="highlight plain"><table><tbody><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div><div class="line">9</div><div class="line">10</div><div class="line">11</div><div class="line">12</div><div class="line">13</div><div class="line">14</div><div class="line">15</div><div class="line">16</div><div class="line">17</div><div class="line">18</div><div class="line">19</div><div class="line">20</div><div class="line">21</div><div class="line">22</div><div class="line">23</div><div class="line">24</div></pre></td><td class="code"><pre><div class="line">package com.sds.listenner;</div><div class="line"></div><div class="line">import java.util.HashMap;</div><div class="line"></div><div class="line">import javax.servlet.http.HttpSession;</div><div class="line"></div><div class="line">public class MySessionContext {</div><div class="line">    private static HashMap&lt;String, HttpSession&gt; mymap = new HashMap&lt;String, HttpSession&gt;();</div><div class="line">        public static synchronized void AddSession(HttpSession session) {</div><div class="line">                if (session != null) {</div><div class="line">                        mymap.put(session.getId(), session);</div><div class="line">                     }</div><div class="line">             }</div><div class="line">         public static synchronized void DelSession(HttpSession session) {</div><div class="line">                 if (session != null) {</div><div class="line">                         mymap.remove(session.getId());</div><div class="line">                     }</div><div class="line">             }</div><div class="line">         public static synchronized HttpSession getSession(String session_id) {</div><div class="line">                if (session_id == null)</div><div class="line">                     return null;</div><div class="line">                 return mymap.get(session_id);</div><div class="line">             }</div><div class="line">}</div></pre></td></tr></tbody></table></figure>
<p>Logger.java</p>
<figure class="highlight plain"><table><tbody><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div></pre></td><td class="code"><pre><div class="line">package com.sds.listenner;</div><div class="line"></div><div class="line">public class Logger {</div><div class="line">	public void info(String info) {</div><div class="line">		System.out.println(info);</div><div class="line">	}</div><div class="line">}</div></pre></td></tr></tbody></table></figure>
<p>3、添加SessionListener到系统配置中:</p>
<figure class="highlight plain"><table><tbody><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div><div class="line">9</div><div class="line">10</div><div class="line">11</div><div class="line">12</div><div class="line">13</div><div class="line">14</div><div class="line">15</div><div class="line">16</div></pre></td><td class="code"><pre><div class="line">package com.sds.cfg;</div><div class="line"></div><div class="line">import org.springframework.context.annotation.Configuration;</div><div class="line">import org.springframework.web.servlet.config.annotation.CorsRegistry;</div><div class="line">import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;</div><div class="line">@Configuration</div><div class="line">public class SessionConfiguration extends WebMvcConfigurerAdapter{</div><div class="line">    //注册session监听器;</div><div class="line">    @Bean</div><div class="line">    public ServletListenerRegistrationBean&lt;SessionListener&gt; servletListenerRegistrationBean() {</div><div class="line">        ServletListenerRegistrationBean&lt;SessionListener&gt; slrBean = new ServletListenerRegistrationBean&lt;SessionListener&gt;();</div><div class="line">        slrBean.setListener(new SessionListener());</div><div class="line">        return slrBean;</div><div class="line">    }</div><div class="line"></div><div class="line">}</div></pre></td></tr></tbody></table></figure>
<p>原理：通过SessionListener监听session的创建和销毁，并在对应的session生命周期中从静态的HashMap【自定义的session容器】中添加或者删除对应的session，从而实现session的动态管理，提供准确的统计数据。</p>
<p>注意：在本例中提供了根据sessionId获取session的方法。</p>

      

      
        <!-- <div class="page-reward">
          <a href="javascript:;" class="page-reward-btn tooltip-top">
            <div class="tooltip tooltip-east">
            <span class="tooltip-item">
              赏
            </span>
            <span class="tooltip-content">
              <span class="tooltip-text">
                <span class="tooltip-inner">
                  <p class="reward-p"><i class="icon icon-quo-left"></i>谢谢你请我吃糖果<i class="icon icon-quo-right"></i></p>
                  <div class="reward-box">
                    
                    
                  </div>
                </span>
              </span>
            </span>
          </div>
          </a>
        </div> -->
      
    </div>
    <div class="article-info article-info-index">
      
      
      

      

      
        
<div class="share-btn share-icons tooltip-left">
  <div class="tooltip tooltip-east">
    <span class="tooltip-item">
      <a href="javascript:;" class="share-sns share-outer">
        <i class="icon icon-share"></i>
      </a>
    </span>
    <span class="tooltip-content">
      <div class="share-wrap">
        <div class="share-icons">
          <a class="weibo share-sns" href="javascript:;" data-type="weibo">
            <i class="icon icon-weibo"></i>
          </a>
          <a class="weixin share-sns wxFab" href="javascript:;" data-type="weixin">
            <i class="icon icon-weixin"></i>
          </a>
          <a class="qq share-sns" href="javascript:;" data-type="qq">
            <i class="icon icon-qq"></i>
          </a>
          <a class="douban share-sns" href="javascript:;" data-type="douban">
            <i class="icon icon-douban"></i>
          </a>
          <a class="qzone share-sns" href="javascript:;" data-type="qzone">
            <i class="icon icon-qzone"></i>
          </a>
          <a class="facebook share-sns" href="javascript:;" data-type="facebook">
            <i class="icon icon-facebook"></i>
          </a>
          <a class="twitter share-sns" href="javascript:;" data-type="twitter">
            <i class="icon icon-twitter"></i>
          </a>
          <a class="google share-sns" href="javascript:;" data-type="google">
            <i class="icon icon-google"></i>
          </a>
        </div>
      </div>
    </span>
  </div>
</div>

<!-- <div class="page-modal wx-share js-wx-box">
    <a class="close js-modal-close" href="javascript:;"><i class="icon icon-close"></i></a>
    <p>扫一扫，分享到微信</p>
    <div class="wx-qrcode">
      <img src="http://s.jiathis.com/qrcode.php?url=http://yoursite.com/2018/09/09/SpringBoot中Session监听器的使用/" alt="微信分享二维码">
    </div>
</div> -->

<div class="mask js-mask"></div>
      
      <div class="clearfix"></div>
    </div>
  </div>
</article>
    </div>
</template>
<script>
    export default {
        
    }
</script>
