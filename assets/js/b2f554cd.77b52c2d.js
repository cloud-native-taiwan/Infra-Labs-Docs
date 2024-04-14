"use strict";(self.webpackChunknew_infra_labs_docs=self.webpackChunknew_infra_labs_docs||[]).push([[1477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"2023-recap","metadata":{"permalink":"/blog/2023-recap","editUrl":"https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/blog/2023-12-recap/index.md","source":"@site/blog/2023-12-recap/index.md","title":"CNTUG Infra Labs 2023 Recap","description":"2023 \u5e74\u5c0d\u65bc CNTUG Infra Labs \u4f86\u8aaa\u662f\u4e00\u500b\u6311\u6230\u8207\u6210\u9577\u4e26\u5b58\u7684\u4e00\u5e74\u3002\u9762\u5c0d\u8cc7\u91d1\u548c\u4f7f\u7528\u7387\u7684\u6311\u6230\uff0c\u6211\u5011\u5c0d\u67b6\u69cb\u9032\u884c\u4e86\u91cd\u5927\u8abf\u6574\u4e26\u7cbe\u7c21\u4e86\u898f\u6a21\u3002\u9019\u7bc7\u6587\u7ae0\u65e8\u5728\u56de\u9867\u904e\u53bb\u4e00\u5e74\u4e2d Infra Labs \u6240\u7d93\u6b77\u7684\u8b8a\u9077\u3002","date":"2024-04-14T02:53:41.000Z","formattedDate":"2024\u5e744\u670814\u65e5","tags":[{"label":"recap","permalink":"/blog/tags/recap"}],"readingTime":2.565,"hasTruncateMarker":false,"authors":[{"name":"Gene Kuo","title":"CNTUG Infra Labs Maintainer","url":"https://github.com/ching-kuo","imageURL":"https://github.com/ching-kuo.png","key":"igene"}],"frontMatter":{"slug":"2023-recap","title":"CNTUG Infra Labs 2023 Recap","authors":["igene"],"tags":["recap"]},"unlisted":false,"nextItem":{"title":"CNTUG Infra Labs 2022 Recap","permalink":"/blog/2022-recap"}},"content":"2023 \u5e74\u5c0d\u65bc CNTUG Infra Labs \u4f86\u8aaa\u662f\u4e00\u500b\u6311\u6230\u8207\u6210\u9577\u4e26\u5b58\u7684\u4e00\u5e74\u3002\u9762\u5c0d\u8cc7\u91d1\u548c\u4f7f\u7528\u7387\u7684\u6311\u6230\uff0c\u6211\u5011\u5c0d\u67b6\u69cb\u9032\u884c\u4e86\u91cd\u5927\u8abf\u6574\u4e26\u7cbe\u7c21\u4e86\u898f\u6a21\u3002\u9019\u7bc7\u6587\u7ae0\u65e8\u5728\u56de\u9867\u904e\u53bb\u4e00\u5e74\u4e2d Infra Labs \u6240\u7d93\u6b77\u7684\u8b8a\u9077\u3002\\n\\n## \u8edf\u9ad4\u66f4\u65b0\\n\\n\u672c\u5e74\u5ea6\uff0c\u6211\u5011\u5728\u8edf\u9ad4\u65b9\u9762\u9032\u884c\u4e86\u4e00\u7cfb\u5217\u7684\u5347\u7d1a\uff0c\u78ba\u4fdd\u4e86\u7cfb\u7d71\u7684\u5b89\u5168\u6027\u548c\u6548\u80fd\u3002\u7576\u524d\u67b6\u69cb\u5305\u62ec Debian Linux\u3001OpenStack\u3001\u4ee5\u53ca Ceph\u3002\\n\\n- Debian: \u5f9e 11 \u7248\u672c\u5347\u7d1a\u81f3 12\\n- OpenStack: \u5f9e Zed \u7248\u672c\u9032\u884c\u4e86\u5169\u6b21\u5347\u7d1a\uff0c\u9054\u5230 2023.2 \u7248\u672c\\n- Ceph: \u5f9e 17.2.5 \u5347\u7d1a\u81f3 18.2.1\\n\\n## \u786c\u9ad4\u8abf\u6574\\n\\n\u6211\u5011\u5728\u786c\u9ad4\u65b9\u9762\u9032\u884c\u4e86\u4ee5\u4e0b\u8abf\u6574\uff1a\\n\\n- **\u65b0\u589e\u8655\u7406\u5668\u652f\u6301**: \u70ba\u4e86\u6eff\u8db3\u4e0d\u540c\u4f7f\u7528\u8005\u7684\u9700\u6c42\uff0c\u65b0\u589e\u4e86 AMD Epyc Milan \u548c Ampere Altra \u8655\u7406\u5668\u3002\\n- **\u7db2\u8def\u512a\u5316**: \u57fa\u65bc\u6210\u672c\u6548\u76ca\u7684\u8003\u616e\uff0c\u6211\u5011\u6e1b\u5c11\u4e86\u90e8\u5206\u9ad8\u53ef\u7528\u6027\u8a2d\u5099\u3002\\n- **\u6a5f\u6ac3\u63d0\u4f9b\u5546\u66f4\u63db**: \u70ba\u4e86\u964d\u4f4e\u6210\u672c\uff0c\u6211\u5011\u8f49\u79fb\u5230\u4e86\u65b0\u7684\u6a5f\u6ac3\u63d0\u4f9b\u5546\u3002\\n\\n\u6211\u5011\u9f13\u52f5\u793e\u7fa4\u6210\u54e1\u6216\u4f7f\u7528\u8005\u5728\u8ca1\u52d9\u8a31\u53ef\u7684\u60c5\u6cc1\u4e0b\uff0c\u901a\u904e[\u9019\u500b\u9023\u7d50](https://ocf.neticrm.tw/civicrm/contribute/transact?reset=1&id=29)\u5c0d\u6211\u5011\u7684\u5c08\u6848\u9032\u884c\u5c0f\u984d\u6350\u6b3e\u3002\\n\\n## \u4eba\u529b\u8cc7\u6e90\\n\\n\u6211\u5011\u8877\u5fc3\u611f\u8b1d @tico88612 \u5728\u904e\u53bb\u4e00\u5e74\u4e2d\u5c0d Infra Labs \u7684\u8ca2\u737b\uff0c\u5305\u62ec\u6587\u6a94\u7db2\u7ad9\u7684\u91cd\u5beb\u548c\u5728\u5ba3\u50b3\u7b49\u65b9\u9762\u7684\u52aa\u529b\u3002\\n\\n\u6b32\u52a0\u5165\u6b64\u5c08\u6848\uff0c\u8acb\u806f\u7e6b[\u6211\u5011](mailto:infra@cloudnative.tw)\u6216\u5728 [CNTUG GitHub](https://github.com/cloud-native-taiwan)\u4e0a\u8ca2\u737b\u3002\\n\\n## \u672a\u4f86\u5c55\u671b\\n\\n### \u52a0\u5f37\u5ba3\u50b3\\n\\n\u6211\u5011\u8a08\u5283\u5728 2024 \u5e74\u52a0\u5f37\u5ba3\u50b3\u6d3b\u52d5\uff0c\u4ee5\u5438\u5f15\u66f4\u591a\u4f7f\u7528\u8005\u4e26\u9f13\u52f5\u66f4\u591a\u4eba\u8ca2\u737b\u65bc\u958b\u6e90\u793e\u7fa4\u3002\\n\\n### \u6d41\u7a0b\u81ea\u52d5\u5316\\n\\n\u76ee\u524d\u7684\u7533\u8acb\u548c\u5e33\u865f\u5efa\u7acb\u904e\u7a0b\u4ecd\u9700\u624b\u52d5\u64cd\u4f5c\u3002\u6211\u5011\u5e0c\u671b\u901a\u904e\u81ea\u52d5\u5316\u7a0b\u5e8f\u4f86\u7c21\u5316\u9019\u4e9b\u6d41\u7a0b\uff0c\u6e1b\u8f15\u7ba1\u7406\u54e1\u7684\u8ca0\u64d4\u3002\\n\\n## \u7e3d\u7d50\\n\\n\u5118\u7ba1\u4eca\u5e74\u672a\u4f7f\u7528\u793e\u7fa4\u5c08\u6236\u7684\u6350\u6b3e\uff0cInfra Labs \u4ecd\u6210\u529f\u7dad\u6301\u904b\u71df\uff0c\u611f\u8b1d\u6240\u6709\u6210\u54e1\u7684\u652f\u6301\u3002\u6211\u5011\u671f\u5f85\u5728\u660e\u5e74\u5be6\u73fe\u66f4\u9ad8\u7684\u4f7f\u7528\u7387\u548c\u7a69\u5b9a\u6027\uff0c\u4e26\u70ba\u958b\u6e90\u793e\u7fa4\u5275\u9020\u66f4\u5927\u7684\u50f9\u503c\u3002"},{"id":"2022-recap","metadata":{"permalink":"/blog/2022-recap","editUrl":"https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/blog/2022-12-29-recap/index.md","source":"@site/blog/2022-12-29-recap/index.md","title":"CNTUG Infra Labs 2022 Recap","description":"CNTUG Infra Labs \u81ea\u5f9e 2022/1/1 \u958b\u653e\u7533\u8acb\u81f3\u4eca\u5df2\u7d93\u5feb\u4e00\u5e74\u4e86\uff0c\u5176\u4e2d\u7d93\u904e\u4e86\u5e7e\u6b21\u8edf\u786c\u9ad4\u5347\u7d1a\u3001\u67b6\u69cb\u66f4\u6539\u4ee5\u53ca outage\u3002\u9019\u7bc7\u6587\u7ae0\u5927\u6982\u4f86\u8a18\u9304\u4e00\u4e0b Infra Labs \u9019\u4e00\u5e74\u7684\u6574\u500b\u5efa\u7acb\u4ee5\u53ca\u71df\u904b\u904e\u7a0b\u3002","date":"2022-12-29T00:00:00.000Z","formattedDate":"2022\u5e7412\u670829\u65e5","tags":[{"label":"recap","permalink":"/blog/tags/recap"}],"readingTime":12.305,"hasTruncateMarker":true,"authors":[{"name":"Gene Kuo","title":"CNTUG Infra Labs Maintainer","url":"https://github.com/ching-kuo","imageURL":"https://github.com/ching-kuo.png","key":"igene"}],"frontMatter":{"slug":"2022-recap","title":"CNTUG Infra Labs 2022 Recap","authors":["igene"],"tags":["recap"]},"unlisted":false,"prevItem":{"title":"CNTUG Infra Labs 2023 Recap","permalink":"/blog/2023-recap"}},"content":"CNTUG Infra Labs \u81ea\u5f9e 2022/1/1 \u958b\u653e\u7533\u8acb\u81f3\u4eca\u5df2\u7d93\u5feb\u4e00\u5e74\u4e86\uff0c\u5176\u4e2d\u7d93\u904e\u4e86\u5e7e\u6b21\u8edf\u786c\u9ad4\u5347\u7d1a\u3001\u67b6\u69cb\u66f4\u6539\u4ee5\u53ca outage\u3002\u9019\u7bc7\u6587\u7ae0\u5927\u6982\u4f86\u8a18\u9304\u4e00\u4e0b Infra Labs \u9019\u4e00\u5e74\u7684\u6574\u500b\u5efa\u7acb\u4ee5\u53ca\u71df\u904b\u904e\u7a0b\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n![Rack View](images/current_rack.jpg)\\n\\n## \u5c08\u6848\u52d5\u6a5f\\n\\n\u81ea\u5df1\u5176\u5be6\u5728\u5f88\u4e45\u4ee5\u524d\u4e00\u76f4\u5c31\u6709\u5728\u8cfc\u8cb7\u4f3a\u670d\u5668\u53ca\u7db2\u8def\u8a2d\u5099\u5efa\u7acb\u4e00\u500b\u5c0f\u5c0f\u7684 OpenStack/Ceph \u6e2c\u8a66\u96c6\u7fa4\uff0c\u4f46\u96c6\u7fa4\u4f7f\u7528\u7387\u4e0d\u7ba1\u662f\u904b\u7b97\u8cc7\u6e90\u3001\u5132\u5b58\u7a7a\u9593\u9084\u662f\u7db2\u8def\u8cc7\u6e90\u5176\u5be6\u4e00\u76f4\u90fd\u4e0d\u9ad8\u3002\u5e7e\u5e74\u524d\u7372\u5f97 public IPv4 \u5730\u5740\u7684\u6642\u5019\u5c31\u6709\u60f3\u6cd5\u8981\u514d\u8cbb\u63d0\u4f9b\u7d66\u793e\u7fa4\u548c\u5b78\u751f\u4f7f\u7528\uff0c\u5e0c\u671b\u80fd\u5920\u4fc3\u9032\u793e\u7fa4\u7684\u6210\u9577\u3002\u4f46\u7531\u65bc\u8cc7\u91d1\u554f\u984c\u9072\u9072\u7121\u6cd5\u5be6\u65bd\u9019\u9805\u8a08\u756b\u3002\\n\\n\u4f86\u65e5\u672c\u5de5\u4f5c\u5f8c\uff0c\u624b\u908a\u80fd\u5920\u904b\u7528\u7684\u8cc7\u91d1\u8b8a\u5f97\u7a0d\u5fae\u5145\u8db3\u4e00\u9ede\uff0c\u518d\u52a0\u4e0a\u65e5\u672c\u4e0d\u7ba1\u662f\u6a5f\u6ac3\u7a7a\u9593\u9084\u662f\u7db2\u8def\u670d\u52d9\u76f8\u8f03\u53f0\u7063\u90fd\u4fbf\u5b9c\u7684\u8a31\u591a\uff0c\u65bc\u662f\u9019\u500b\u8a08\u756b\u5c31\u6b7b\u7070\u5fa9\u71c3\u4e86\u3002\\n\\n## \u5c08\u6848\u8cc7\u91d1\u4f86\u6e90\\n\\n### \u4f01\u696d\u8d0a\u52a9\\n\\n\u4e00\u958b\u59cb\u8cc7\u91d1\u4f86\u6e90\u662f\u7531\u4e00\u4e9b\u793e\u7fa4\u6210\u54e1\u7684\u500b\u4eba\u8d0a\u52a9\uff0c\u5269\u4e0b\u4e0d\u8db3\u7684\u5f9e\u81ea\u5df1\u7684\u8377\u5305\u4e2d\u51fa\u3002\u5f8c\u7e8c\u5728\u793e\u7fa4\u6210\u54e1\u7684\u52aa\u529b\u4e4b\u4e0b\u6709\u62c9\u5230\u4e86 Red Hat \u4ee5\u53ca\u805a\u78a9\u4e00\u5e74\u7684\u8d0a\u52a9\uff0c\u5927\u5927\u6e1b\u8f15\u4e86\u8cc7\u91d1\u7684\u8ca0\u64d4\u3002\\n\\n### \u500b\u4eba\u8d0a\u52a9\\n\\n\u5728\u9019\u88e1\u4e5f\u5148\u7279\u5225\u611f\u8b1d\u793e\u7fa4\u6210\u54e1 Hazel, Samina \u7b49\u4eba\u7684\u8d0a\u52a9\uff0c\u4ee5\u53ca [OCF](https://ocf.tw) \u5354\u52a9\u7ba1\u7406\u8d0a\u52a9\u6b3e\u9805\u3002\\n\\n\u7531\u65bc\u79df\u501f\u6a5f\u6ac3\u4ee5\u53ca\u7db2\u8def\u7684\u6bcf\u6708\u8cbb\u7528\u4ecd\u662f\u4e00\u7b46\u4e0d\u5c0f\u7684\u6578\u5b57\uff0c\u5982\u679c\u5404\u4f4d\u8b80\u8005\u6709\u9918\u529b\u7684\u8a71\u4e5f\u6b61\u8fce[\u8d0a\u52a9 CNTUG \u793e\u7fa4](https://ocf.neticrm.tw/civicrm/contribute/transact?reset=1&id=29)\uff0c\u6709\u90e8\u5206\u6b3e\u9805\u5c07\u6703\u7528\u4f86\u7dad\u6301 Infra Labs \u7684\u71df\u904b\u3002\\n\\n## \u8a2d\u5099\u6e05\u55ae\u5217\u8868\\n\\n\u8a2d\u5099\u7684\u90e8\u5206\u4e3b\u8981\u6709\u5e7e\u500b\u4f86\u6e90\\n\\n- \u4ee5\u524d homelab \u4f7f\u7528\u904e\u7684\u8a2d\u5099\\n- \u65e5\u672c Yahoo \u62cd\u8ce3\u8cfc\u8cb7\\n- \u4e2d\u570b\u6dd8\u5bf6/\u9592\u9b5a\u8cfc\u8cb7\\n- \u53f0\u7063\u4e8c\u624b\u793e\u5718\u8cfc\u8cb7\\n- eBay \u8cfc\u8cb7\\n\\n\u5176\u4e2d\u524d\u5169\u9805\u4f54\u4e86\u5927\u591a\u6578\u3002\\n\\n\u8a2d\u5099\u7684\u8cfc\u8cb7\u57fa\u672c\u4e0a\u5168\u90e8\u90fd\u662f\u4e8c\u624b\u7684\uff0c\u751a\u81f3\u5728\u65e5\u672c Yahoo \u62cd\u8ce3\u4e0a\u8cb7\u5230\u65e5\u672c\u4fd7\u7a31\u7684 Junk \u54c1\uff08\u70ba\u6e2c\u8a66\u4e0d\u77e5\u9053\u597d\u58de\uff09CPU\uff0c\u5927\u7d04 30 \u9846\u4e00\u500b\u4e00\u500b\u62ff\u4f86\u6e2c\u8a66\u6311\u51fa\u80fd\u4f7f\u7528\u7684\u4f86\u3002\u9019\u4e5f\u662f\u70ba\u4ec0\u9ebc Infra Labs \u53ef\u4ee5\u4f7f\u7528\u76f8\u5c0d\u65b0\u7684 CPU (Xeon Scalabe 2nd Generation) \u7684\u539f\u56e0\u3002\\n\\n\u82e5\u60f3\u8a73\u7d30\u4e86\u89e3\u76ee\u524d\u4f7f\u7528\u7684\u8a2d\u5099\u53ef\u4ee5\u53c3\u8003 [Architecture](/docs/architecture/network)\\n\\n## \u5c08\u6848\u5efa\u7f6e\u6d41\u7a0b\\n\\n### \u786c\u9ad4\u8cc7\u6e90\u5efa\u7f6e\u6d41\u7a0b\\n\\n\u5728\u8207\u4e0a\u6e38\u5ee0\u5546\u8ac7\u597d\u4e86\u7db2\u8def\u4ee5\u53ca\u6a5f\u6ac3\u7684\u79df\u7528\u5408\u7d04\u5f8c\u5c31\u4f86\u4e86\u5be6\u969b\u5efa\u69cb\u74b0\u5883\u7684\u904e\u7a0b\u4e86\u3002\u6574\u500b Infra Labs \u7684\u5efa\u7f6e\u57fa\u672c\u4e0a\u662f\u5f9e\u4e00\u500b\u7a7a\u7a7a\u7684\u6a5f\u6ac3\u958b\u59cb\u3001\u5f9e\u4e0a\u67b6\u3001\u63a5\u7dda\u3001\u8a2d\u5099\u8a2d\u5b9a\u3001OS \u5b89\u88dd\u3001IaaS \u90e8\u7f72\u4e00\u5c64\u4e00\u5c64\u7684\u84cb\u4e0a\u53bb\u3002\\n\\n![Rack After Cabling](images/rack_after_cabling.jpg)\\n\\n\u5728\u9019\u908a\u4e5f\u984d\u5916\u611f\u8b1d [Shouko](https://github.com/shouko) \u4ee5\u53ca Samina \u62bd\u7a7a\u4f86\u5e6b\u5fd9\u4e0a\u67b6\u4ee5\u53ca\u63a5\u7dda\u548c [steveyiyo](https://steveyi.net/)\u3001[p6i](https://pwtsai.github.io) \u5354\u52a9\u7db2\u8def\u8a2d\u5b9a\u548c\u6392\u9664\u7b49\u3002\\n\\n### \u8edf\u9ad4\u8cc7\u6e90\u5efa\u7f6e\u6d41\u7a0b\\n\\n\u8edf\u9ad4\u7684\u5efa\u7f6e\u904e\u7a0b\u5728 [COSCUP x KCD Taiwan 2022 \u8b70\u7a0b \u5982\u4f55\u5728\u5e7e\u5c0f\u6642\u5167\u5feb\u901f\u90e8\u7f72\u4e00\u500b\u79c1\u6709\u96f2 \u2014 \u4ee5 CNTUG Infra Labs \u70ba\u4f8b](https://coscup.org/2022/zh-TW/session/HPTAUB) \u6709\u4ecb\u7d39\uff0c\u5982\u679c\u60f3\u77ad\u89e3\u7684\u8a71\u53ef\u4ee5\u89c0\u770b[\u9304\u5f71\u5f71\u7247](https://www.youtube.com/watch?v=YexUnVOZC8M&t=430s)\u3002\u76ee\u524d\u4e5f\u6709\u90e8\u5206\u8a2d\u5b9a\u516c\u958b\u5728 Infra Labs \u7684 GitHub \u4e0a\uff0c\u5f8c\u7e8c\u5c07\u6703\u9678\u7e8c\u516c\u958b\u5176\u4ed6\u8a2d\u5b9a\u3002\\n\\n## \u71df\u904b\u904e\u7a0b\\n\\n### Outage\\n\\n\u71df\u904b\u904e\u7a0b\u5176\u5be6\u767c\u751f\u4e0d\u5c11 outage\uff0c\u4e3b\u8981\u90fd\u662f\u5728\u7db2\u8def\u6216\u662f OpenStack \u4e0a\uff0cCeph \u76ee\u524d\u9084\u6c92\u6709\u9047\u5230\u592a\u591a\u554f\u984c\u3002\u7e3d\u9ad4\u4f86\u8b1b\uff0c\u7cfb\u7d71\u53ef\u7528\u7387\u61c9\u8a72\u662f\u6709\u5728 95% \u4ee5\u4e0a\u3002\\n\\nOutage \u7684\u90e8\u5206\u4e0d\u4e4f\u5e7e\u500b\u883b\u6709\u8da3\u7684\uff1a\\n\\n- \u5728\u6a5f\u6ac3\u7684\u6642\u5019\u4e0d\u5c0f\u5fc3\u626f\u5230\u4e0a\u6e38\u7db2\u8def\u8a2d\u5099\u7684\u96fb\u6e90\u7dda\uff0c\u597d\u6b7b\u4e0d\u6b7b\u90a3\u53f0\u8a2d\u5099\u53ea\u6709\u63a5\u55ae\u96fb\u6e90\u52a0\u4e0a\u5fd8\u8a18 commit \u8a2d\u5b9a\uff0c\u9020\u6210\u4e86\u5e7e\u500b\u5c0f\u6642\u7684\u65b7\u7dda\u3002\\n- Core router \u66f4\u65b0 firmware \u5f8c\u67d0\u500b\u672c\u4f86\u58de\u6389\u7684\u529f\u80fd\u4fee\u597d\u4e86\uff0c\u7d50\u679c\u90a3\u500b\u529f\u80fd\u9020\u6210\u7db2\u8def\u4e0d\u5b9a\u6642\u6389\u5305\u3002\\n\\n\u7531\u65bc\u662f\u514d\u8cbb\u63d0\u4f9b\u7684\u670d\u52d9\u4e26\u6c92\u6709\u63d0\u4f9b SLA\uff0c\u4f46\u662f\u9084\u662f\u76e1\u529b\u80fd\u8b93\u7cfb\u7d71\u53ef\u7528\u7387\u8d8a\u9ad8\u8d8a\u597d\u3002\u660e\u5e74\u82e5\u662f\u6642\u9593\u5141\u8a31\u7684\u8a71\uff0c\u6bcf\u6b21 outage \u4e5f\u90fd\u5e0c\u671b\u80fd\u5920\u63d0\u4f9b\u6bd4\u8f03\u8a73\u7d30\u7684 outage report \u7d66\u4f7f\u7528\u8005\u3002\\n\\n### \u63d0\u4f9b\u7684\u670d\u52d9\\n\\n\u76ee\u524d\u63d0\u4f9b\u7684\u7686\u70ba\u666e\u904d Public Cloud \u5e38\u898b\u7684\u670d\u52d9\\n\\n- \u865b\u64ec\u6a5f\u5668 (Virtual Machine)\\n- \u5340\u584a\u5132\u5b58 (Block Storage)\\n- \u7269\u4ef6\u5132\u5b58 (Object Storage)\\n- \u7db2\u8def\\n- \u9644\u8f09\u5e73\u8861 (Load Balancer)\\n- DNS\\n\\n\u6700\u8fd1\u65b0\u589e\u4e86\u63d0\u4f9b\u7d66\u865b\u64ec\u6a5f\u5668 GPU \u4f7f\u7528\uff0c\u5982\u679c\u6709\u9700\u6c42\u6b61\u8fce\u7533\u8acb\u4f7f\u7528\u3002\\n\\n## \u5c08\u6848\u6210\u679c\\n\\n\u4eca\u5e74 (2022) \u672c\u5c08\u6848\u63d0\u4f9b\u5c0d\u8c61\uff0c\u4e3b\u8981\u5305\u542b\u6280\u8853\u793e\u7fa4\u8207\u96fb\u8cc7\u5b78\u751f\u4f7f\u7528\uff0c\u5176\u4e2d\u4ea6\u5c0d Infra Labs \u9032\u884c\u6e2c\u8a66\u548c\u7cfb\u7d71\u67b6\u8a2d\uff0c\u4ee5\u4e0b\u70ba 2022 \u5e74\u4f7f\u7528\u6848\u4f8b\u7684\u6210\u679c\u767c\u8868\uff0c\u4e26\u9054\u6210\u672c\u5c08\u6848\u56de\u994b\u793e\u6703\u8207\u57f9\u80b2\u82f1\u624d\u7684\u76ee\u6a19\u3002\\n\\n- [\u5728 Kubernetes \u7528 Loki \u8490\u96c6 log \u505a\u76e3\u63a7\u8b66\u544a\u901a\u77e5\u65b9\u6cd5\u6574\u7406\u7b46\u8a18](https://malagege.github.io/blog/2022/04/03/%E5%9C%A8-Kubernetes-%E7%94%A8-Loki-%E8%92%90%E9%9B%86-log-%E5%81%9A%E7%9B%A3%E6%8E%A7%E8%AD%A6%E5%91%8A%E9%80%9A%E7%9F%A5%E6%96%B9%E6%B3%95%E6%95%B4%E7%90%86%E7%AD%86%E8%A8%98/)\\n- [\u4f7f\u7528 CNTUG Infra Labs \u7de8\u8b6f Android Custom ROM](https://hackmd.io/@EdwardWu/InfraLabs_OB)\\n- [TOEDU \u53f0\u7063\u958b\u653e\u6559\u80b2\u63a8\u52d5\u5718\u968a](https://toedu.g0v.tw/index.html)\\n- Building Kubernetes cluster the hard way\\n    - [\u5f71\u7247](https://www.youtube.com/watch?v=YexUnVOZC8M&t=17837s)\\n- 2022 iThome \u9435\u4eba\u8cfd\u300a\u95dc\u65bc\u6211\u600e\u9ebc\u628a\u4e00\u5e74\u5167\u5b78\u5230\u7684\u65b0\u624b IT/SRE \u6fc3\u7e2e\u5230 30 \u5929\u7b46\u8a18\u9019\u6a94\u4e8b\u300b\\n    - [Jerry Yang\'s Blog](https://blog.yangjerry.tw/categories/IT-%E9%90%B5%E4%BA%BA%E8%B3%BD/2022/)\\n    - [iThome](https://ithelp.ithome.com.tw/users/20112934/ironman/5640)\\n- [2022 iThome \u9435\u4eba\u8cfd\u300a5G \u6838\u5fc3\u7db2\u8def\u8207\u96f2\u539f\u751f\u958b\u767c\u4e4b\u4e82\u5f48\u963f\u7fd4\u300b](https://ithelp.ithome.com.tw/articles/10306986)\\n- [UniCourse \u5927\u5b78\u8ab2\u7a0b\u8cc7\u8a0a\u4ea4\u6d41\u5e73\u81fa](https://github.com/cloud-native-taiwan/Infra-Labs-Docs/blob/main/unicourse.tw)\\n    - [GitHub](https://github.com/UniCourse-TW)\\n    - [g0v \u5c08\u6848](https://sch001.g0v.tw/dash/prj/PHfxJKR2hpg7f9rt58i9g6WZ_ZRo08)\\n- [SCIST \u5357\u81fa\u7063\u5b78\u751f\u8cc7\u8a0a\u793e\u7fa4](https://scist.org/)\\n\\n### \u76ee\u524d\u5c08\u6848\u5229\u7528\u72c0\u6cc1\\n\\n\u76ee\u524d\u5c08\u6848\u4e2d\u7e3d\u5171\u904b\u884c\u4e86\u4ee5\u4e0b\u8cc7\u6e90\uff1a\\n\\n- VM: 64 \u53f0\\n- vCPU: 352 \u500b\\n- RAM: 433 GiB\\n- Public IPv4: 66 \u500b\\n- NVMe Storage: \u7d04 2.4 TiB\\n- SSD Storage: \u7d04 1.5 TiB\\n\\n![Resource Usage](images/resource.png)\\n\\n## \u76ee\u524d\u56f0\u96e3\\n\\n### \u8cc7\u91d1\\n\\n\u4eca\u5e74\u6709 Red Hat \u4ee5\u53ca\u805a\u78a9\u5169\u9593\u516c\u53f8\u8d0a\u52a9\u4e86\u4e0d\u5c0f\u7684\u4e00\u7b46\u9322\u624d\u80fd\u5b89\u7136\u5ea6\u904e\uff0c\u4f46\u76ee\u524d\u5df2\u7d93\u78ba\u5b9a\u660e\u5e74\u7121\u6cd5\u518d\u7e7c\u7e8c\u8d0a\u52a9\u3002\u96d6\u7136\u4ee5\u76ee\u524d\u7684\u85aa\u8cc7\u662f\u8db3\u4ee5\u6490\u8d77\u6bcf\u6708\u7684\u8cbb\u7528\uff0c\u4f46\u662f\u4e5f\u662f\u6708\u6708\u6210\u70ba\u6708\u5149\u65cf\u7684\u72c0\u614b\u3002\u96d6\u7136\u6574\u500b\u96c6\u7fa4\u662f\u514d\u8cbb\u63d0\u4f9b\uff0c\u4f46\u662f\u4f7f\u7528\u8005\u6709\u9918\u529b\u7684\u8a71\u9084\u662f\u53ef\u4ee5\u900f\u904e OCF \u9032\u884c\u8d0a\u52a9\u4ee5\u7dad\u6301\u8a08\u756b\u6301\u7e8c\u7684\u71df\u904b\u3002\\n\\n### \u8a2d\u5099\\n\\n\u76ee\u524d\u8a18\u61b6\u9ad4\u7684\u4f7f\u7528\u7387\u5df2\u7d93\u9054\u5230\u4e86\u4e00\u5b9a\u7684\u7a0b\u5ea6\uff0c\u7531\u65bc\u6574\u500b\u7cfb\u7d71\u662f\u53ea\u6709 3 \u53f0\u4e3b\u6a5f\u7d44\u6210\u7684 Hyper Converged Infrastructure\uff0c\u5728\u76ee\u524d\u7684\u8a18\u61b6\u9ad4\u4f7f\u7528\u7387\u4e0b\uff0c\u5728\u4e00\u53f0\u4e3b\u6a5f\u7dad\u8b77\u7684\u6642\u5019\u5c07\u4e0d\u5920\u8cc7\u6e90 live migrate \u90a3\u53f0\u4e3b\u6a5f\u7684\u6240\u6709 VM instance \u81f3\u5176\u4ed6\u5169\u53f0\u3002\u5f8c\u7e8c\u5728\u8cc7\u91d1\u5141\u8a31\u7684\u72c0\u6cc1\u4e0b\u61c9\u8a72\u6703\u5148\u5c07\u4e3b\u6a5f\u8a18\u61b6\u9ad4\u9032\u884c\u5347\u7d1a\u3002\\n\\n\u7db2\u8def\u7684\u90e8\u5206\u662f\u76ee\u524d\u6700\u5927\u7684 SPOF (Single point of failure)\u3002\u76ee\u524d\u5728\u7db2\u8def\u67b6\u69cb\u4e2d\u4f7f\u7528\u4e86 100G \u4ea4\u63db\u6a5f\u4f5c\u70ba\u4e3b\u8981\u7684\u4ea4\u63db\u5668\uff0c\u7531\u65bc\u5728\u75ab\u60c5\u671f\u9593\u90a3\u53f0\u4ea4\u63db\u5668\u5df2\u7d93\u6f32\u50f9\u4e86\u8d85\u904e 6 \u500d\uff0c\u6c92\u8fa6\u6cd5\u8cfc\u5165\u7b2c\u4e8c\u53f0\u505a MLAG \u7b49\u6a5f\u5236\u5099\u63f4\u3002\u53e6\u5916\u4e3b\u6a5f\u4e0a\u7684 100G NIC \u4e5f\u662f\u55ae port\uff0c\u6240\u4ee5\u76ee\u524d\u53ea\u8981\u76f8\u95dc\u7db2\u8def\u8a2d\u5099\u6709\u9700\u8981\u9032\u884c\u5347\u7d1a\u6216\u7dad\u8b77\u6574\u500b\u7cfb\u7d71\u5c07\u6703\u4e0b\u7dda\u3002\\n\\n### \u4eba\u529b\\n\\n\u76ee\u524d\u6574\u500b\u7cfb\u7d71\u7684\u7dad\u8b77\u662f\u7531\u6211\u4e00\u4eba\u9032\u884c\u5b8c\u6210\uff0c\u57fa\u672c\u4e0a\u6240\u6709\u5fc3\u529b\u653e\u5728\u7dad\u8b77\u548c\u904b\u71df\u4e0a\u5c31\u5df2\u7d93\u5f88\u5fd9\u4e86\uff0c\u8981\u505a\u67b6\u69cb\u7684\u8abf\u6574\u6216\u662f\u5176\u4ed6\u7684\u6539\u9032\u6642\u9593\u4e0a\u5c31\u986f\u5f97\u4e0d\u592a\u8db3\u5920\u3002\\n\\n\u7531\u65bc OpenStack \u8ddf Ceph \u4e0a\u624b\u96e3\u5ea6\u8f03\u9ad8\uff0c\u81ea\u5df1\u4e5f\u9084\u6c92\u6709\u4e00\u500b\u6bd4\u8f03\u7cfb\u7d71\u6027\u7684\u6d41\u7a0b\u53ef\u4ee5\u6559\u5b78\u6c92\u6709\u76f8\u95dc\u7d93\u9a57\u7684\u4eba\u4e0a\u624b\uff0c\u56e0\u6b64\u8981\u5c0b\u627e\u65b0\u7684\u4eba\u624b\u96e3\u5ea6\u975e\u5e38\u9ad8\u3002\\n\\n## \u672a\u4f86\u898f\u5283\\n\\n\u672a\u4f86\u898f\u5283\u5176\u5be6\u5f88\u591a\u9805\u76ee\u5df2\u7d93\u5beb\u5f88\u4e45\u4e86\uff0c\u4f46\u662f\u7531\u65bc\u6642\u9593\u554f\u984c\u4e00\u76f4\u7121\u6cd5\u5be6\u884c\u3002\\n\\n### \u6539\u9032\u76e3\u63a7\\n\\n\u76e3\u63a7\u7cfb\u7d71\u5176\u5be6\u662f\u76ee\u524d\u6700\u6c92\u6709\u898f\u5283\u7684\u4e00\u500b\u90e8\u5206\uff0c\u96d6\u7136 OpenStack \u90e8\u7f72\u5de5\u5177\u5728\u90e8\u7f72\u6642\u6709\u4e00\u4f75\u90e8\u7f72\u4e00\u4e9b\u76f8\u95dc\u7684\u5de5\u5177\uff0c\u4f46\u5176\u5be6\u6c92\u6709\u5230\u5f88\u7b26\u5408\u9700\u6c42\u3002\u76ee\u524d\u5df2\u7d93\u6709\u4e00\u4e9b\u6539\u9032\u9805\u76ee\u6e2c\u8a66\u5230\u4e00\u534a\uff0c\u4f8b\u5982 smoke-test \u7b49\uff0c\u672a\u4f86\u5e0c\u671b\u80fd\u5920\u63d0\u4f9b\u4f7f\u7528\u8005\u4e00\u500b\u67e5\u770b\u76ee\u524d\u7cfb\u7d71\u72c0\u6cc1\u7684\u7db2\u9801\u3002\\n\\n### \u65b0\u589e ARM \u4f3a\u670d\u5668\\n\\n\u5e7e\u500b\u6708\u524d\u6709\u6536\u5230\u4e86\u5e7e\u53f0\u6350\u52a9\u7d66\u793e\u7fa4\u7684 ARM64 \u67b6\u69cb\u7684\u4f3a\u670d\u5668\uff0c\u4f46\u7531\u65bc\u90a3\u500b\u7cfb\u7d71\u5be6\u5728\u592a\u6311\u8a18\u61b6\u9ad4\u4e86\uff0c\u4e00\u76f4\u7121\u6cd5\u627e\u5230\u8db3\u5920\u7684\u8a18\u61b6\u9ad4\u8b93 3 \u53f0\u4e3b\u6a5f\u4e0a\u7dda\u3002\u672a\u4f86\u6703\u6301\u7e8c\u6536\u96c6\u8a18\u61b6\u9ad4\uff0c\u5e0c\u671b\u80fd\u63d0\u4f9b\u4f7f\u7528\u8005\u4e00\u4e9b\u4e0d\u540c\u7684\u786c\u9ad4\u67b6\u69cb\u9032\u884c\u6e2c\u8a66\u548c\u5b78\u7fd2\u3002\\n\\n### \u65b0\u589e RISC-V \u4f3a\u670d\u5668\\n\\n\u9019\u4e00\u9805\u898f\u5283\u5176\u5be6\u6bd4\u8f03\u504f\u5411\u8a31\u9858\u6027\u8cea\uff0cRISC-V \u672c\u8eab\u5728\u865b\u64ec\u5316\u7684\u898f\u683c\u4e0a\u6709\u4e00\u90e8\u5206\u525b\u5236\u5b9a\u5b8c\u7562\uff0c\u81ea\u5df1\u9084\u883b\u6709\u8208\u8da3\u6e2c\u8a66\u662f\u5426\u80fd\u5728 RISC-V \u4e0a\u5229\u7528 OpenStack \u7cfb\u7d71\u8dd1 Virtual Machine\u3002\u7576\u521d ARM64 \u525b\u8208\u8d77\u9032\u884c OpenStack porting \u4e5f\u662f\u500b\u883b\u6709\u8da3\u7684\u7d93\u6b77\u3002\u4f46\u76ee\u524d\u7531\u65bc\u652f\u63f4\u865b\u64ec\u5316\u7684 RISC-V \u6e2c\u8a66\u677f\u4e0d\u6613\u53d6\u5f97\uff0c\u6240\u4ee5\u9019\u9805\u8a08\u756b\u9084\u5728\u64f1\u7f6e\u7576\u4e2d\u3002\\n\\n### \u6539\u5584\u7db2\u8def\u67b6\u69cb\\n\\n\u4e0a\u9762\u6709\u63d0\u5230\u76ee\u524d\u7db2\u8def\u67b6\u69cb\u5176\u5be6\u662f\u6574\u500b Infra Labs \u6700\u8106\u5f31\u7684\u90e8\u5206\uff0c\u4f46\u7531\u65bc\u727d\u626f\u5230\u8a2d\u5099\u3001\u8cc7\u91d1\u7b49\u554f\u984c\uff0c\u6539\u5584\u96e3\u5ea6\u6bd4\u8f03\u5927\u3002\\n\\n### \u66f4\u591a\u8ca2\u737b\\n\\nInfra Labs \u7dad\u904b\u904e\u7a0b\u4e2d\u5176\u5be6\u6709\u6642\u90fd\u6703\u906d\u9047\u4e00\u4e9b bug\uff0c\u7b46\u8005\u5df2\u7d93\u8ca2\u737b\u4e86\u5e7e\u500b PR \u81f3 kops \u4ee5\u53ca OpenStack \u7684 bug report\uff0c\u671f\u671b\u5728\u672a\u4f86\u80fd\u5920\u5229\u7528 Infra Labs \u5c0d\u958b\u6e90\u793e\u7fa4\u9032\u884c\u66f4\u591a\u7684\u8ca2\u737b\u3002\\n\\n## \u7e3d\u7d50\\n\\nInfra Labs \u7b97\u662f\u6211\u751f\u6daf\u4e2d\u9032\u884c\u904e\u6700\u8907\u96dc\u7684\u4e00\u500b\u8a08\u756b\u4e86\uff0c\u5176\u4e2d\u5176\u5be6\u5b78\u5230\u4e86\u883b\u591a\u6771\u897f\u4e5f\u71d2\u4e86\u883b\u591a\u7684\u9322\u3002\u5728\u9019\u4e00\u5e74\u5167\u5176\u5be6\u6574\u500b\u7cfb\u7d71\u7684\u5229\u7528\u7387\u6bd4\u6211\u4e00\u958b\u59cb\u9810\u671f\u7684\u597d\uff0c\u4e5f\u5e0c\u671b\u660e\u5e74 Infra Labs \u53ef\u4ee5\u70ba\u53f0\u7063\u751a\u81f3\u5168\u4e16\u754c\u7684\u958b\u6e90\u793e\u7fa4\u5e36\u4f86\u66f4\u591a\u7684\u8ca2\u737b\u3002\\n\\n\u6700\u5f8c\u5982\u679c\u5c0d Infra Labs \u4e0d\u7ba1\u662f\u60f3\u8d0a\u52a9\uff0c\u60f3\u6df1\u5165\u4e86\u89e3\u6216\u662f\u6709\u8208\u8da3\u52a0\u5165\u7684\u90fd\u6b61\u8fce\u5bc4\u4fe1\u5230 [infra@cloudnative.tw](mailto:infra@cloudnative.tw) \u6216\u662f\u900f\u904e\u5404\u7a2e\u7ba1\u9053\u627e\u6211\u804a\u5929\u3002"}]}')}}]);