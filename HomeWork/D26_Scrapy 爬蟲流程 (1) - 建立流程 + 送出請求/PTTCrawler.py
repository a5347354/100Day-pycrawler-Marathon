# -*- coding: utf-8 -*-
import scrapy


class PttcrawlerSpider(scrapy.Spider):
    name = 'PTTCrawler'
    allowed_domains = ['www.ptt.cc']
    start_urls = ['https://www.ptt.cc/bbs/Lifeismoney/index.html']

    def parse(self, response):
        pass
#         self.logger.info('Got successful response from {}'.format(response.url))
#         pass
    def start_requests(self):
        for u in self.start_urls:
            yield scrapy.Request(u, cookies={'over18': '1'})
