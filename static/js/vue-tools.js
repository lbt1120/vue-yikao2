const classifyData = function() {
  var classify = [
    { value: '编导', id: 1 },
    { value: '播音', id: 2 },
    { value: '表演', id: 3 },
    { value: '摄影', id: 4 },
    { value: '美术', id: 5 },
    { value: '舞蹈', id: 6 },
    { value: '音乐', id: 7 },
    { value: '服表', id: 8 },
    { value: '书法', id: 9 },
    { value: '空乘', id: 10 },
    { value: '留学', id: 11 },
  ]
  return classify;
}
const cityData = function(provinceid, cityid, countyid, key) {
  var cityArr = [{
      id: 1,
      value: "北京",
      city: [{
        id: 1,
        value: "北京",
        area: [{
            id: 37,
            value: "东城区"
          },
          {
            id: 38,
            value: "西城区"
          },
          {
            id: 39,
            value: "崇文区"
          },
          {
            id: 40,
            value: "宣武区"
          },
          {
            id: 41,
            value: "朝阳区"
          },
          {
            id: 42,
            value: "丰台区"
          },
          {
            id: 43,
            value: "石景山区"
          },
          {
            id: 44,
            value: "海淀区"
          },
          {
            id: 45,
            value: "门头沟区"
          },
          {
            id: 46,
            value: "房山区"
          },
          {
            id: 47,
            value: "通州区"
          },
          {
            id: 48,
            value: "顺义区"
          },
          {
            id: 49,
            value: "昌平区"
          },
          {
            id: 50,
            value: "大兴区"
          },
          {
            id: 51,
            value: "怀柔区"
          },
          {
            id: 52,
            value: "平谷区"
          },
          {
            id: 53,
            value: "密云县"
          },
          {
            id: 54,
            value: "延庆县"
          }
        ]
      }]
    },
    {
      id: 2,
      value: "天津",
      city: [{
        id: 2,
        value: "天津",
        area: [{
            id: 55,
            value: "和平区"
          },
          {
            id: 56,
            value: "河东区"
          },
          {
            id: 57,
            value: "河西区"
          },
          {
            id: 58,
            value: "南开区"
          },
          {
            id: 59,
            value: "河北区"
          },
          {
            id: 60,
            value: "红桥区"
          },
          {
            id: 61,
            value: "塘沽区"
          },
          {
            id: 62,
            value: "汉沽区"
          },
          {
            id: 63,
            value: "大港区"
          },
          {
            id: 64,
            value: "东丽区"
          },
          {
            id: 65,
            value: "西青区"
          },
          {
            id: 66,
            value: "津南区"
          },
          {
            id: 67,
            value: "北辰区"
          },
          {
            id: 68,
            value: "武清区"
          },
          {
            id: 69,
            value: "宝坻区"
          },
          {
            id: 70,
            value: "宁河县"
          },
          {
            id: 71,
            value: "静海县"
          },
          {
            id: 72,
            value: "蓟县"
          }
        ]
      }]
    },
    {
      id: 3,
      value: "河北",
      city: [{
          id: 73,
          value: "石家庄市",
          area: [{
              id: 1126,
              value: "井陉县"
            },
            {
              id: 1127,
              value: "井陉矿区"
            },
            {
              id: 1128,
              value: "元氏县"
            },
            {
              id: 1129,
              value: "平山县"
            },
            {
              id: 1130,
              value: "新乐市"
            },
            {
              id: 1131,
              value: "新华区"
            },
            {
              id: 1132,
              value: "无极县"
            },
            {
              id: 1133,
              value: "晋州市"
            },
            {
              id: 1134,
              value: "栾城县"
            },
            {
              id: 1135,
              value: "桥东区"
            },
            {
              id: 1136,
              value: "桥西区"
            },
            {
              id: 1137,
              value: "正定县"
            },
            {
              id: 1138,
              value: "深泽县"
            },
            {
              id: 1139,
              value: "灵寿县"
            },
            {
              id: 1140,
              value: "藁城市"
            },
            {
              id: 1141,
              value: "行唐县"
            },
            {
              id: 1142,
              value: "裕华区"
            },
            {
              id: 1143,
              value: "赞皇县"
            },
            {
              id: 1144,
              value: "赵县"
            },
            {
              id: 1145,
              value: "辛集市"
            },
            {
              id: 1146,
              value: "长安区"
            },
            {
              id: 1147,
              value: "高邑县"
            },
            {
              id: 1148,
              value: "鹿泉市"
            }
          ]
        },
        {
          id: 74,
          value: "唐山市",
          area: [{
              id: 1149,
              value: "丰南区"
            },
            {
              id: 1150,
              value: "丰润区"
            },
            {
              id: 1151,
              value: "乐亭县"
            },
            {
              id: 1152,
              value: "古冶区"
            },
            {
              id: 1153,
              value: "唐海县"
            },
            {
              id: 1154,
              value: "开平区"
            },
            {
              id: 1155,
              value: "滦南县"
            },
            {
              id: 1156,
              value: "滦县"
            },
            {
              id: 1157,
              value: "玉田县"
            },
            {
              id: 1158,
              value: "路北区"
            },
            {
              id: 1159,
              value: "路南区"
            },
            {
              id: 1160,
              value: "迁安市"
            },
            {
              id: 1161,
              value: "迁西县"
            },
            {
              id: 1162,
              value: "遵化市"
            }
          ]
        },
        {
          id: 75,
          value: "秦皇岛市",
          area: [{
              id: 1163,
              value: "北戴河区"
            },
            {
              id: 1164,
              value: "卢龙县"
            },
            {
              id: 1165,
              value: "山海关区"
            },
            {
              id: 1166,
              value: "抚宁县"
            },
            {
              id: 1167,
              value: "昌黎县"
            },
            {
              id: 1168,
              value: "海港区"
            },
            {
              id: 1169,
              value: "青龙满族自治县"
            }
          ]
        },
        {
          id: 76,
          value: "邯郸市",
          area: [{
              id: 1170,
              value: "丛台区"
            },
            {
              id: 1171,
              value: "临漳县"
            },
            {
              id: 1172,
              value: "复兴区"
            },
            {
              id: 1173,
              value: "大名县"
            },
            {
              id: 1174,
              value: "峰峰矿区"
            },
            {
              id: 1175,
              value: "广平县"
            },
            {
              id: 1176,
              value: "成安县"
            },
            {
              id: 1177,
              value: "曲周县"
            },
            {
              id: 1178,
              value: "武安市"
            },
            {
              id: 1179,
              value: "永年县"
            },
            {
              id: 1180,
              value: "涉县"
            },
            {
              id: 1181,
              value: "磁县"
            },
            {
              id: 1182,
              value: "肥乡县"
            },
            {
              id: 1183,
              value: "邯山区"
            },
            {
              id: 1184,
              value: "邯郸县"
            },
            {
              id: 1185,
              value: "邱县"
            },
            {
              id: 1186,
              value: "馆陶县"
            },
            {
              id: 1187,
              value: "魏县"
            },
            {
              id: 1188,
              value: "鸡泽县"
            }
          ]
        },
        {
          id: 77,
          value: "邢台市",
          area: [{
              id: 1189,
              value: "临城县"
            },
            {
              id: 1190,
              value: "临西县"
            },
            {
              id: 1191,
              value: "任县"
            },
            {
              id: 1192,
              value: "内丘县"
            },
            {
              id: 1193,
              value: "南和县"
            },
            {
              id: 1194,
              value: "南宫市"
            },
            {
              id: 1195,
              value: "威县"
            },
            {
              id: 1196,
              value: "宁晋县"
            },
            {
              id: 1197,
              value: "巨鹿县"
            },
            {
              id: 1198,
              value: "平乡县"
            },
            {
              id: 1199,
              value: "广宗县"
            },
            {
              id: 1200,
              value: "新河县"
            },
            {
              id: 1201,
              value: "柏乡县"
            },
            {
              id: 1202,
              value: "桥东区"
            },
            {
              id: 1203,
              value: "桥西区"
            },
            {
              id: 1204,
              value: "沙河市"
            },
            {
              id: 1205,
              value: "清河县"
            },
            {
              id: 1206,
              value: "邢台县"
            },
            {
              id: 1207,
              value: "隆尧县"
            }
          ]
        },
        {
          id: 78,
          value: "保定市",
          area: [{
              id: 1208,
              value: "北市区"
            },
            {
              id: 1209,
              value: "南市区"
            },
            {
              id: 1210,
              value: "博野县"
            },
            {
              id: 1211,
              value: "唐县"
            },
            {
              id: 1212,
              value: "安国市"
            },
            {
              id: 1213,
              value: "安新县"
            },
            {
              id: 1214,
              value: "定兴县"
            },
            {
              id: 1215,
              value: "定州市"
            },
            {
              id: 1216,
              value: "容城县"
            },
            {
              id: 1217,
              value: "徐水县"
            },
            {
              id: 1218,
              value: "新市区"
            },
            {
              id: 1219,
              value: "易县"
            },
            {
              id: 1220,
              value: "曲阳县"
            },
            {
              id: 1221,
              value: "望都县"
            },
            {
              id: 1222,
              value: "涞水县"
            },
            {
              id: 1223,
              value: "涞源县"
            },
            {
              id: 1224,
              value: "涿州市"
            },
            {
              id: 1225,
              value: "清苑县"
            },
            {
              id: 1226,
              value: "满城县"
            },
            {
              id: 1227,
              value: "蠡县"
            },
            {
              id: 1228,
              value: "阜平县"
            },
            {
              id: 1229,
              value: "雄县"
            },
            {
              id: 1230,
              value: "顺平县"
            },
            {
              id: 1231,
              value: "高碑店市"
            },
            {
              id: 1232,
              value: "高阳县"
            }
          ]
        },
        {
          id: 79,
          value: "张家口市",
          area: [{
              id: 1233,
              value: "万全县"
            },
            {
              id: 1234,
              value: "下花园区"
            },
            {
              id: 1235,
              value: "宣化区"
            },
            {
              id: 1236,
              value: "宣化县"
            },
            {
              id: 1237,
              value: "尚义县"
            },
            {
              id: 1238,
              value: "崇礼县"
            },
            {
              id: 1239,
              value: "康保县"
            },
            {
              id: 1240,
              value: "张北县"
            },
            {
              id: 1241,
              value: "怀安县"
            },
            {
              id: 1242,
              value: "怀来县"
            },
            {
              id: 1243,
              value: "桥东区"
            },
            {
              id: 1244,
              value: "桥西区"
            },
            {
              id: 1245,
              value: "沽源县"
            },
            {
              id: 1246,
              value: "涿鹿县"
            },
            {
              id: 1247,
              value: "蔚县"
            },
            {
              id: 1248,
              value: "赤城县"
            },
            {
              id: 1249,
              value: "阳原县"
            }
          ]
        },
        {
          id: 80,
          value: "承德市",
          area: [{
              id: 1250,
              value: "丰宁满族自治县"
            },
            {
              id: 1251,
              value: "兴隆县"
            },
            {
              id: 1252,
              value: "双桥区"
            },
            {
              id: 1253,
              value: "双滦区"
            },
            {
              id: 1254,
              value: "围场满族蒙古族自治县"
            },
            {
              id: 1255,
              value: "宽城满族自治县"
            },
            {
              id: 1256,
              value: "平泉县"
            },
            {
              id: 1257,
              value: "承德县"
            },
            {
              id: 1258,
              value: "滦平县"
            },
            {
              id: 1259,
              value: "隆化县"
            },
            {
              id: 1260,
              value: "鹰手营子矿区"
            }
          ]
        },
        {
          id: 81,
          value: "衡水市",
          area: [{
              id: 1261,
              value: "冀州市"
            },
            {
              id: 1262,
              value: "安平县"
            },
            {
              id: 1263,
              value: "故城县"
            },
            {
              id: 1264,
              value: "景县"
            },
            {
              id: 1265,
              value: "枣强县"
            },
            {
              id: 1266,
              value: "桃城区"
            },
            {
              id: 1267,
              value: "武强县"
            },
            {
              id: 1268,
              value: "武邑县"
            },
            {
              id: 1269,
              value: "深州市"
            },
            {
              id: 1270,
              value: "阜城县"
            },
            {
              id: 1271,
              value: "饶阳县"
            }
          ]
        },
        {
          id: 82,
          value: "廊坊市",
          area: [{
              id: 1272,
              value: "三河市"
            },
            {
              id: 1273,
              value: "固安县"
            },
            {
              id: 1274,
              value: "大厂回族自治县"
            },
            {
              id: 1275,
              value: "大城县"
            },
            {
              id: 1276,
              value: "安次区"
            },
            {
              id: 1277,
              value: "广阳区"
            },
            {
              id: 1278,
              value: "文安县"
            },
            {
              id: 1279,
              value: "永清县"
            },
            {
              id: 1280,
              value: "霸州市"
            },
            {
              id: 1281,
              value: "香河县"
            }
          ]
        },
        {
          id: 83,
          value: "沧州市",
          area: [{
              id: 1282,
              value: "东光县"
            },
            {
              id: 1283,
              value: "任丘市"
            },
            {
              id: 1284,
              value: "南皮县"
            },
            {
              id: 1285,
              value: "吴桥县"
            },
            {
              id: 1286,
              value: "孟村回族自治县"
            },
            {
              id: 1287,
              value: "新华区"
            },
            {
              id: 1288,
              value: "沧县"
            },
            {
              id: 1289,
              value: "河间市"
            },
            {
              id: 1290,
              value: "泊头市"
            },
            {
              id: 1291,
              value: "海兴县"
            },
            {
              id: 1292,
              value: "献县"
            },
            {
              id: 1293,
              value: "盐山县"
            },
            {
              id: 1294,
              value: "肃宁县"
            },
            {
              id: 1295,
              value: "运河区"
            },
            {
              id: 1296,
              value: "青县"
            },
            {
              id: 1297,
              value: "黄骅市"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      value: "山西",
      city: [{
          id: 84,
          value: "太原市",
          area: [{
              id: 1298,
              value: "万柏林区"
            },
            {
              id: 1299,
              value: "古交市"
            },
            {
              id: 1300,
              value: "娄烦县"
            },
            {
              id: 1301,
              value: "小店区"
            },
            {
              id: 1302,
              value: "尖草坪区"
            },
            {
              id: 1303,
              value: "晋源区"
            },
            {
              id: 1304,
              value: "杏花岭区"
            },
            {
              id: 1305,
              value: "清徐县"
            },
            {
              id: 1306,
              value: "迎泽区"
            },
            {
              id: 1307,
              value: "阳曲县"
            }
          ]
        },
        {
          id: 85,
          value: "大同市",
          area: [{
              id: 1308,
              value: "南郊区"
            },
            {
              id: 1309,
              value: "城区"
            },
            {
              id: 1310,
              value: "大同县"
            },
            {
              id: 1311,
              value: "天镇县"
            },
            {
              id: 1312,
              value: "左云县"
            },
            {
              id: 1313,
              value: "广灵县"
            },
            {
              id: 1314,
              value: "新荣区"
            },
            {
              id: 1315,
              value: "浑源县"
            },
            {
              id: 1316,
              value: "灵丘县"
            },
            {
              id: 1317,
              value: "矿区"
            },
            {
              id: 1318,
              value: "阳高县"
            }
          ]
        },
        {
          id: 86,
          value: "阳泉市",
          area: [{
              id: 1319,
              value: "城区"
            },
            {
              id: 1320,
              value: "平定县"
            },
            {
              id: 1321,
              value: "盂县"
            },
            {
              id: 1322,
              value: "矿区"
            },
            {
              id: 1323,
              value: "郊区"
            }
          ]
        },
        {
          id: 87,
          value: "长治市",
          area: [{
              id: 1324,
              value: "城区"
            },
            {
              id: 1325,
              value: "壶关县"
            },
            {
              id: 1326,
              value: "屯留县"
            },
            {
              id: 1327,
              value: "平顺县"
            },
            {
              id: 1328,
              value: "武乡县"
            },
            {
              id: 1329,
              value: "沁县"
            },
            {
              id: 1330,
              value: "沁源县"
            },
            {
              id: 1331,
              value: "潞城市"
            },
            {
              id: 1332,
              value: "襄垣县"
            },
            {
              id: 1333,
              value: "郊区"
            },
            {
              id: 1334,
              value: "长子县"
            },
            {
              id: 1335,
              value: "长治县"
            },
            {
              id: 1336,
              value: "黎城县"
            }
          ]
        },
        {
          id: 88,
          value: "晋城市",
          area: [{
              id: 1337,
              value: "城区"
            },
            {
              id: 1338,
              value: "沁水县"
            },
            {
              id: 1339,
              value: "泽州县"
            },
            {
              id: 1340,
              value: "阳城县"
            },
            {
              id: 1341,
              value: "陵川县"
            },
            {
              id: 1342,
              value: "高平市"
            }
          ]
        },
        {
          id: 89,
          value: "朔州市",
          area: [{
              id: 1343,
              value: "右玉县"
            },
            {
              id: 1344,
              value: "山阴县"
            },
            {
              id: 1345,
              value: "平鲁区"
            },
            {
              id: 1346,
              value: "应县"
            },
            {
              id: 1347,
              value: "怀仁县"
            },
            {
              id: 1348,
              value: "朔城区"
            }
          ]
        },
        {
          id: 90,
          value: "晋中市",
          area: [{
              id: 1349,
              value: "介休市"
            },
            {
              id: 1350,
              value: "和顺县"
            },
            {
              id: 1351,
              value: "太谷县"
            },
            {
              id: 1352,
              value: "寿阳县"
            },
            {
              id: 1353,
              value: "左权县"
            },
            {
              id: 1354,
              value: "平遥县"
            },
            {
              id: 1355,
              value: "昔阳县"
            },
            {
              id: 1356,
              value: "榆次区"
            },
            {
              id: 1357,
              value: "榆社县"
            },
            {
              id: 1358,
              value: "灵石县"
            },
            {
              id: 1359,
              value: "祁县"
            }
          ]
        },
        {
          id: 91,
          value: "运城市",
          area: [{
              id: 1360,
              value: "万荣县"
            },
            {
              id: 1361,
              value: "临猗县"
            },
            {
              id: 1362,
              value: "垣曲县"
            },
            {
              id: 1363,
              value: "夏县"
            },
            {
              id: 1364,
              value: "平陆县"
            },
            {
              id: 1365,
              value: "新绛县"
            },
            {
              id: 1366,
              value: "永济市"
            },
            {
              id: 1367,
              value: "河津市"
            },
            {
              id: 1368,
              value: "盐湖区"
            },
            {
              id: 1369,
              value: "稷山县"
            },
            {
              id: 1370,
              value: "绛县"
            },
            {
              id: 1371,
              value: "芮城县"
            },
            {
              id: 1372,
              value: "闻喜县"
            }
          ]
        },
        {
          id: 92,
          value: "忻州市",
          area: [{
              id: 1373,
              value: "五台县"
            },
            {
              id: 1374,
              value: "五寨县"
            },
            {
              id: 1375,
              value: "代县"
            },
            {
              id: 1376,
              value: "保德县"
            },
            {
              id: 1377,
              value: "偏关县"
            },
            {
              id: 1378,
              value: "原平市"
            },
            {
              id: 1379,
              value: "宁武县"
            },
            {
              id: 1380,
              value: "定襄县"
            },
            {
              id: 1381,
              value: "岢岚县"
            },
            {
              id: 1382,
              value: "忻府区"
            },
            {
              id: 1383,
              value: "河曲县"
            },
            {
              id: 1384,
              value: "神池县"
            },
            {
              id: 1385,
              value: "繁峙县"
            },
            {
              id: 1386,
              value: "静乐县"
            }
          ]
        },
        {
          id: 93,
          value: "临汾市",
          area: [{
              id: 1387,
              value: "乡宁县"
            },
            {
              id: 1388,
              value: "侯马市"
            },
            {
              id: 1389,
              value: "古县"
            },
            {
              id: 1390,
              value: "吉县"
            },
            {
              id: 1391,
              value: "大宁县"
            },
            {
              id: 1392,
              value: "安泽县"
            },
            {
              id: 1393,
              value: "尧都区"
            },
            {
              id: 1394,
              value: "曲沃县"
            },
            {
              id: 1395,
              value: "永和县"
            },
            {
              id: 1396,
              value: "汾西县"
            },
            {
              id: 1397,
              value: "洪洞县"
            },
            {
              id: 1398,
              value: "浮山县"
            },
            {
              id: 1399,
              value: "翼城县"
            },
            {
              id: 1400,
              value: "蒲县"
            },
            {
              id: 1401,
              value: "襄汾县"
            },
            {
              id: 1402,
              value: "隰县"
            },
            {
              id: 1403,
              value: "霍州市"
            }
          ]
        },
        {
          id: 94,
          value: "吕梁市",
          area: [{
              id: 1404,
              value: "中阳县"
            },
            {
              id: 1405,
              value: "临县"
            },
            {
              id: 1406,
              value: "交口县"
            },
            {
              id: 1407,
              value: "交城县"
            },
            {
              id: 1408,
              value: "兴县"
            },
            {
              id: 1409,
              value: "孝义市"
            },
            {
              id: 1410,
              value: "岚县"
            },
            {
              id: 1411,
              value: "文水县"
            },
            {
              id: 1412,
              value: "方山县"
            },
            {
              id: 1413,
              value: "柳林县"
            },
            {
              id: 1414,
              value: "汾阳市"
            },
            {
              id: 1415,
              value: "石楼县"
            },
            {
              id: 1416,
              value: "离石区"
            }
          ]
        }
      ]
    },
    {
      id: 5,
      value: "内蒙",
      city: [{
          id: 95,
          value: "呼和浩特市",
          area: [{
              id: 1417,
              value: "和林格尔县"
            },
            {
              id: 1418,
              value: "回民区"
            },
            {
              id: 1419,
              value: "土默特左旗"
            },
            {
              id: 1420,
              value: "托克托县"
            },
            {
              id: 1421,
              value: "新城区"
            },
            {
              id: 1422,
              value: "武川县"
            },
            {
              id: 1423,
              value: "清水河县"
            },
            {
              id: 1424,
              value: "玉泉区"
            },
            {
              id: 1425,
              value: "赛罕区"
            }
          ]
        },
        {
          id: 96,
          value: "包头市",
          area: [{
              id: 1426,
              value: "东河区"
            },
            {
              id: 1427,
              value: "九原区"
            },
            {
              id: 1428,
              value: "固阳县"
            },
            {
              id: 1429,
              value: "土默特右旗"
            },
            {
              id: 1430,
              value: "昆都仑区"
            },
            {
              id: 1431,
              value: "白云矿区"
            },
            {
              id: 1432,
              value: "石拐区"
            },
            {
              id: 1433,
              value: "达尔罕茂明安联合旗"
            },
            {
              id: 1434,
              value: "青山区"
            }
          ]
        },
        {
          id: 97,
          value: "乌海市",
          area: [{
              id: 1435,
              value: "乌达区"
            },
            {
              id: 1436,
              value: "海勃湾区"
            },
            {
              id: 1437,
              value: "海南区"
            }
          ]
        },
        {
          id: 98,
          value: "赤峰市",
          area: [{
              id: 1438,
              value: "元宝山区"
            },
            {
              id: 1439,
              value: "克什克腾旗"
            },
            {
              id: 1440,
              value: "喀喇沁旗"
            },
            {
              id: 1441,
              value: "宁城县"
            },
            {
              id: 1442,
              value: "巴林右旗"
            },
            {
              id: 1443,
              value: "巴林左旗"
            },
            {
              id: 1444,
              value: "敖汉旗"
            },
            {
              id: 1445,
              value: "松山区"
            },
            {
              id: 1446,
              value: "林西县"
            },
            {
              id: 1447,
              value: "红山区"
            },
            {
              id: 1448,
              value: "翁牛特旗"
            },
            {
              id: 1449,
              value: "阿鲁科尔沁旗"
            }
          ]
        },
        {
          id: 99,
          value: "通辽市",
          area: [{
              id: 1450,
              value: "奈曼旗"
            },
            {
              id: 1451,
              value: "库伦旗"
            },
            {
              id: 1452,
              value: "开鲁县"
            },
            {
              id: 1453,
              value: "扎鲁特旗"
            },
            {
              id: 1454,
              value: "科尔沁区"
            },
            {
              id: 1455,
              value: "科尔沁左翼中旗"
            },
            {
              id: 1456,
              value: "科尔沁左翼后旗"
            },
            {
              id: 1457,
              value: "霍林郭勒市"
            }
          ]
        },
        {
          id: 100,
          value: "鄂尔多斯市",
          area: [{
              id: 1458,
              value: "东胜区"
            },
            {
              id: 1459,
              value: "乌审旗"
            },
            {
              id: 1460,
              value: "伊金霍洛旗"
            },
            {
              id: 1461,
              value: "准格尔旗"
            },
            {
              id: 1462,
              value: "杭锦旗"
            },
            {
              id: 1463,
              value: "达拉特旗"
            },
            {
              id: 1464,
              value: "鄂东胜区"
            },
            {
              id: 1465,
              value: "鄂托克前旗"
            },
            {
              id: 1466,
              value: "鄂托克旗"
            }
          ]
        },
        {
          id: 101,
          value: "呼伦贝尔市",
          area: [{
              id: 1467,
              value: "扎兰屯市"
            },
            {
              id: 1468,
              value: "新巴尔虎右旗"
            },
            {
              id: 1469,
              value: "新巴尔虎左旗"
            },
            {
              id: 1470,
              value: "根河市"
            },
            {
              id: 1471,
              value: "海拉尔区"
            },
            {
              id: 1472,
              value: "满洲里市"
            },
            {
              id: 1473,
              value: "牙克石市"
            },
            {
              id: 1474,
              value: "莫力达瓦达斡尔族自治旗"
            },
            {
              id: 1475,
              value: "鄂伦春自治旗"
            },
            {
              id: 1476,
              value: "鄂温克族自治旗"
            },
            {
              id: 1477,
              value: "阿荣旗"
            },
            {
              id: 1478,
              value: "陈巴尔虎旗"
            },
            {
              id: 1479,
              value: "额尔古纳市"
            }
          ]
        },
        {
          id: 102,
          value: "巴彦淖尔市",
          area: [{
              id: 1480,
              value: "临河区"
            },
            {
              id: 1481,
              value: "乌拉特中旗"
            },
            {
              id: 1482,
              value: "乌拉特前旗"
            },
            {
              id: 1483,
              value: "乌拉特后旗"
            },
            {
              id: 1484,
              value: "五原县"
            },
            {
              id: 1485,
              value: "杭锦后旗"
            },
            {
              id: 1486,
              value: "磴口县"
            }
          ]
        },
        {
          id: 103,
          value: "乌兰察布市",
          area: [{
              id: 1487,
              value: "丰镇市"
            },
            {
              id: 1488,
              value: "兴和县"
            },
            {
              id: 1489,
              value: "凉城县"
            },
            {
              id: 1490,
              value: "化德县"
            },
            {
              id: 1491,
              value: "卓资县"
            },
            {
              id: 1492,
              value: "商都县"
            },
            {
              id: 1493,
              value: "四子王旗"
            },
            {
              id: 1494,
              value: "察哈尔右翼中旗"
            },
            {
              id: 1495,
              value: "察哈尔右翼前旗"
            },
            {
              id: 1496,
              value: "察哈尔右翼后旗"
            },
            {
              id: 1497,
              value: "集宁区"
            }
          ]
        },
        {
          id: 104,
          value: "兴安盟",
          area: [{
              id: 1498,
              value: "乌兰浩特市"
            },
            {
              id: 1499,
              value: "扎赉特旗"
            },
            {
              id: 1500,
              value: "科尔沁右翼中旗"
            },
            {
              id: 1501,
              value: "科尔沁右翼前旗"
            },
            {
              id: 1502,
              value: "突泉县"
            },
            {
              id: 1503,
              value: "阿尔山市"
            }
          ]
        },
        {
          id: 105,
          value: "锡林郭勒盟",
          area: [{
              id: 1504,
              value: "东乌珠穆沁旗"
            },
            {
              id: 1505,
              value: "二连浩特市"
            },
            {
              id: 1506,
              value: "多伦县"
            },
            {
              id: 1507,
              value: "太仆寺旗"
            },
            {
              id: 1508,
              value: "正蓝旗"
            },
            {
              id: 1509,
              value: "正镶白旗"
            },
            {
              id: 1510,
              value: "苏尼特右旗"
            },
            {
              id: 1511,
              value: "苏尼特左旗"
            },
            {
              id: 1512,
              value: "西乌珠穆沁旗"
            },
            {
              id: 1513,
              value: "锡林浩特市"
            },
            {
              id: 1514,
              value: "镶黄旗"
            },
            {
              id: 1515,
              value: "阿巴嘎旗"
            }
          ]
        },
        {
          id: 106,
          value: "阿拉善盟",
          area: [{
              id: 1516,
              value: "阿拉善右旗"
            },
            {
              id: 1517,
              value: "阿拉善左旗"
            },
            {
              id: 1518,
              value: "额济纳旗"
            }
          ]
        }
      ]
    },
    {
      id: 6,
      value: "辽宁",
      city: [{
          id: 107,
          value: "沈阳市",
          area: [{
              id: 1519,
              value: "东陵区"
            },
            {
              id: 1520,
              value: "于洪区"
            },
            {
              id: 1521,
              value: "和平区"
            },
            {
              id: 1522,
              value: "大东区"
            },
            {
              id: 1523,
              value: "康平县"
            },
            {
              id: 1524,
              value: "新民市"
            },
            {
              id: 1525,
              value: "沈北新区"
            },
            {
              id: 1526,
              value: "沈河区"
            },
            {
              id: 1527,
              value: "法库县"
            },
            {
              id: 1528,
              value: "皇姑区"
            },
            {
              id: 1529,
              value: "苏家屯区"
            },
            {
              id: 1530,
              value: "辽中县"
            },
            {
              id: 1531,
              value: "铁西区"
            }
          ]
        },
        {
          id: 108,
          value: "大连市",
          area: [{
              id: 1532,
              value: "中山区"
            },
            {
              id: 1533,
              value: "庄河市"
            },
            {
              id: 1534,
              value: "旅顺口区"
            },
            {
              id: 1535,
              value: "普兰店市"
            },
            {
              id: 1536,
              value: "沙河口区"
            },
            {
              id: 1537,
              value: "瓦房店市"
            },
            {
              id: 1538,
              value: "甘井子区"
            },
            {
              id: 1539,
              value: "西岗区"
            },
            {
              id: 1540,
              value: "金州区"
            },
            {
              id: 1541,
              value: "长海县"
            }
          ]
        },
        {
          id: 109,
          value: "鞍山市",
          area: [{
              id: 1542,
              value: "千山区"
            },
            {
              id: 1543,
              value: "台安县"
            },
            {
              id: 1544,
              value: "岫岩满族自治县"
            },
            {
              id: 1545,
              value: "海城市"
            },
            {
              id: 1546,
              value: "立山区"
            },
            {
              id: 1547,
              value: "铁东区"
            },
            {
              id: 1548,
              value: "铁西区"
            }
          ]
        },
        {
          id: 110,
          value: "抚顺市",
          area: [{
              id: 1549,
              value: "东洲区"
            },
            {
              id: 1550,
              value: "抚顺县"
            },
            {
              id: 1551,
              value: "新宾满族自治县"
            },
            {
              id: 1552,
              value: "新抚区"
            },
            {
              id: 1553,
              value: "望花区"
            },
            {
              id: 1554,
              value: "清原满族自治县"
            },
            {
              id: 1555,
              value: "顺城区"
            }
          ]
        },
        {
          id: 111,
          value: "本溪市",
          area: [{
              id: 1556,
              value: "南芬区"
            },
            {
              id: 1557,
              value: "平山区"
            },
            {
              id: 1558,
              value: "明山区"
            },
            {
              id: 1559,
              value: "本溪满族自治县"
            },
            {
              id: 1560,
              value: "桓仁满族自治县"
            },
            {
              id: 1561,
              value: "溪湖区"
            }
          ]
        },
        {
          id: 112,
          value: "丹东市",
          area: [{
              id: 1562,
              value: "东港市"
            },
            {
              id: 1563,
              value: "元宝区"
            },
            {
              id: 1564,
              value: "凤城市"
            },
            {
              id: 1565,
              value: "宽甸满族自治县"
            },
            {
              id: 1566,
              value: "振兴区"
            },
            {
              id: 1567,
              value: "振安区"
            }
          ]
        },
        {
          id: 113,
          value: "锦州市",
          area: [{
              id: 1568,
              value: "义县"
            },
            {
              id: 1569,
              value: "凌河区"
            },
            {
              id: 1570,
              value: "凌海市"
            },
            {
              id: 1571,
              value: "北镇市"
            },
            {
              id: 1572,
              value: "古塔区"
            },
            {
              id: 1573,
              value: "太和区"
            },
            {
              id: 1574,
              value: "黑山县"
            }
          ]
        },
        {
          id: 114,
          value: "营口市",
          area: [{
              id: 1575,
              value: "大石桥市"
            },
            {
              id: 1576,
              value: "盖州市"
            },
            {
              id: 1577,
              value: "站前区"
            },
            {
              id: 1578,
              value: "老边区"
            },
            {
              id: 1579,
              value: "西市区"
            },
            {
              id: 1580,
              value: "鲅鱼圈区"
            }
          ]
        },
        {
          id: 115,
          value: "阜新市",
          area: [{
              id: 1581,
              value: "太平区"
            },
            {
              id: 1582,
              value: "彰武县"
            },
            {
              id: 1583,
              value: "新邱区"
            },
            {
              id: 1584,
              value: "海州区"
            },
            {
              id: 1585,
              value: "清河门区"
            },
            {
              id: 1586,
              value: "细河区"
            },
            {
              id: 1587,
              value: "蒙古族自治县"
            }
          ]
        },
        {
          id: 116,
          value: "辽阳市",
          area: [{
              id: 1588,
              value: "太子河区"
            },
            {
              id: 1589,
              value: "宏伟区"
            },
            {
              id: 1590,
              value: "弓长岭区"
            },
            {
              id: 1591,
              value: "文圣区"
            },
            {
              id: 1592,
              value: "灯塔市"
            },
            {
              id: 1593,
              value: "白塔区"
            },
            {
              id: 1594,
              value: "辽阳县"
            }
          ]
        },
        {
          id: 117,
          value: "盘锦市",
          area: [{
              id: 1595,
              value: "兴隆台区"
            },
            {
              id: 1596,
              value: "双台子区"
            },
            {
              id: 1597,
              value: "大洼县"
            },
            {
              id: 1598,
              value: "盘山县"
            }
          ]
        },
        {
          id: 118,
          value: "铁岭市",
          area: [{
              id: 1599,
              value: "开原市"
            },
            {
              id: 1600,
              value: "昌图县"
            },
            {
              id: 1601,
              value: "清河区"
            },
            {
              id: 1602,
              value: "西丰县"
            },
            {
              id: 1603,
              value: "调兵山市"
            },
            {
              id: 1604,
              value: "铁岭县"
            },
            {
              id: 1605,
              value: "银州区"
            }
          ]
        },
        {
          id: 119,
          value: "朝阳市",
          area: [{
              id: 1606,
              value: "凌源市"
            },
            {
              id: 1607,
              value: "北票市"
            },
            {
              id: 1608,
              value: "双塔区"
            },
            {
              id: 1609,
              value: "喀喇沁左翼蒙古族自治县"
            },
            {
              id: 1610,
              value: "建平县"
            },
            {
              id: 1611,
              value: "朝阳县"
            },
            {
              id: 1612,
              value: "龙城区"
            }
          ]
        },
        {
          id: 120,
          value: "葫芦岛市",
          area: [{
              id: 1613,
              value: "兴城市"
            },
            {
              id: 1614,
              value: "南票区"
            },
            {
              id: 1615,
              value: "建昌县"
            },
            {
              id: 1616,
              value: "绥中县"
            },
            {
              id: 1617,
              value: "连山区"
            },
            {
              id: 1618,
              value: "龙港区"
            }
          ]
        }
      ]
    },
    {
      id: 7,
      value: "吉林",
      city: [{
          id: 121,
          value: "长春市",
          area: [{
              id: 1619,
              value: "九台市"
            },
            {
              id: 1620,
              value: "二道区"
            },
            {
              id: 1621,
              value: "农安县"
            },
            {
              id: 1622,
              value: "南关区"
            },
            {
              id: 1623,
              value: "双阳区"
            },
            {
              id: 1624,
              value: "宽城区"
            },
            {
              id: 1625,
              value: "德惠市"
            },
            {
              id: 1626,
              value: "朝阳区"
            },
            {
              id: 1627,
              value: "榆树市"
            },
            {
              id: 1628,
              value: "绿园区"
            }
          ]
        },
        {
          id: 122,
          value: "吉林市",
          area: [{
              id: 1629,
              value: "丰满区"
            },
            {
              id: 1630,
              value: "昌邑区"
            },
            {
              id: 1631,
              value: "桦甸市"
            },
            {
              id: 1632,
              value: "永吉县"
            },
            {
              id: 1633,
              value: "磐石市"
            },
            {
              id: 1634,
              value: "舒兰市"
            },
            {
              id: 1635,
              value: "船营区"
            },
            {
              id: 1636,
              value: "蛟河市"
            },
            {
              id: 1637,
              value: "龙潭区"
            }
          ]
        },
        {
          id: 123,
          value: "四平市",
          area: [{
              id: 1638,
              value: "伊通满族自治县"
            },
            {
              id: 1639,
              value: "公主岭市"
            },
            {
              id: 1640,
              value: "双辽市"
            },
            {
              id: 1641,
              value: "梨树县"
            },
            {
              id: 1642,
              value: "铁东区"
            },
            {
              id: 1643,
              value: "铁西区"
            }
          ]
        },
        {
          id: 124,
          value: "辽源市",
          area: [{
              id: 1644,
              value: "东丰县"
            },
            {
              id: 1645,
              value: "东辽县"
            },
            {
              id: 1646,
              value: "西安区"
            },
            {
              id: 1647,
              value: "龙山区"
            }
          ]
        },
        {
          id: 125,
          value: "通化市",
          area: [{
              id: 1648,
              value: "东昌区"
            },
            {
              id: 1649,
              value: "二道江区"
            },
            {
              id: 1650,
              value: "柳河县"
            },
            {
              id: 1651,
              value: "梅河口市"
            },
            {
              id: 1652,
              value: "辉南县"
            },
            {
              id: 1653,
              value: "通化县"
            },
            {
              id: 1654,
              value: "集安市"
            }
          ]
        },
        {
          id: 126,
          value: "白山市",
          area: [{
              id: 1655,
              value: "临江市"
            },
            {
              id: 1656,
              value: "八道江区"
            },
            {
              id: 1657,
              value: "抚松县"
            },
            {
              id: 1658,
              value: "江源区"
            },
            {
              id: 1659,
              value: "长白朝鲜族自治县"
            },
            {
              id: 1660,
              value: "靖宇县"
            }
          ]
        },
        {
          id: 127,
          value: "松原市",
          area: [{
              id: 1661,
              value: "干安县"
            },
            {
              id: 1662,
              value: "前郭尔罗斯蒙古族自治县"
            },
            {
              id: 1663,
              value: "宁江区"
            },
            {
              id: 1664,
              value: "扶余县"
            },
            {
              id: 1665,
              value: "长岭县"
            }
          ]
        },
        {
          id: 128,
          value: "白城市",
          area: [{
              id: 1666,
              value: "大安市"
            },
            {
              id: 1667,
              value: "洮北区"
            },
            {
              id: 1668,
              value: "洮南市"
            },
            {
              id: 1669,
              value: "通榆县"
            },
            {
              id: 1670,
              value: "镇赉县"
            }
          ]
        },
        {
          id: 129,
          value: "延边朝鲜族自治州",
          area: [{
              id: 1671,
              value: "和龙市"
            },
            {
              id: 1672,
              value: "图们市"
            },
            {
              id: 1673,
              value: "安图县"
            },
            {
              id: 1674,
              value: "延吉市"
            },
            {
              id: 1675,
              value: "敦化市"
            },
            {
              id: 1676,
              value: "汪清县"
            },
            {
              id: 1677,
              value: "珲春市"
            },
            {
              id: 1678,
              value: "龙井市"
            }
          ]
        }
      ]
    },
    {
      id: 8,
      value: "黑龙江",
      city: [{
          id: 130,
          value: "哈尔滨市",
          area: [{
              id: 1679,
              value: "五常市"
            },
            {
              id: 1680,
              value: "依兰县"
            },
            {
              id: 1681,
              value: "南岗区"
            },
            {
              id: 1682,
              value: "双城市"
            },
            {
              id: 1683,
              value: "呼兰区"
            },
            {
              id: 1684,
              value: "哈尔滨市道里区"
            },
            {
              id: 1685,
              value: "宾县"
            },
            {
              id: 1686,
              value: "尚志市"
            },
            {
              id: 1687,
              value: "巴彦县"
            },
            {
              id: 1688,
              value: "平房区"
            },
            {
              id: 1689,
              value: "延寿县"
            },
            {
              id: 1690,
              value: "方正县"
            },
            {
              id: 1691,
              value: "木兰县"
            },
            {
              id: 1692,
              value: "松北区"
            },
            {
              id: 1693,
              value: "通河县"
            },
            {
              id: 1694,
              value: "道外区"
            },
            {
              id: 1695,
              value: "阿城区"
            },
            {
              id: 1696,
              value: "香坊区"
            }
          ]
        },
        {
          id: 131,
          value: "齐齐哈尔市",
          area: [{
              id: 1697,
              value: "依安县"
            },
            {
              id: 1698,
              value: "克东县"
            },
            {
              id: 1699,
              value: "克山县"
            },
            {
              id: 1700,
              value: "富拉尔基区"
            },
            {
              id: 1701,
              value: "富裕县"
            },
            {
              id: 1702,
              value: "建华区"
            },
            {
              id: 1703,
              value: "拜泉县"
            },
            {
              id: 1704,
              value: "昂昂溪区"
            },
            {
              id: 1705,
              value: "梅里斯达斡尔族区"
            },
            {
              id: 1706,
              value: "泰来县"
            },
            {
              id: 1707,
              value: "甘南县"
            },
            {
              id: 1708,
              value: "碾子山区"
            },
            {
              id: 1709,
              value: "讷河市"
            },
            {
              id: 1710,
              value: "铁锋区"
            },
            {
              id: 1711,
              value: "龙江县"
            },
            {
              id: 1712,
              value: "龙沙区"
            }
          ]
        },
        {
          id: 132,
          value: "鸡西市",
          area: [{
              id: 1713,
              value: "城子河区"
            },
            {
              id: 1714,
              value: "密山市"
            },
            {
              id: 1715,
              value: "恒山区"
            },
            {
              id: 1716,
              value: "梨树区"
            },
            {
              id: 1717,
              value: "滴道区"
            },
            {
              id: 1718,
              value: "虎林市"
            },
            {
              id: 1719,
              value: "鸡东县"
            },
            {
              id: 1720,
              value: "鸡冠区"
            },
            {
              id: 1721,
              value: "麻山区"
            }
          ]
        },
        {
          id: 133,
          value: "鹤岗市",
          area: [{
              id: 1722,
              value: "东山区"
            },
            {
              id: 1723,
              value: "兴安区"
            },
            {
              id: 1724,
              value: "兴山区"
            },
            {
              id: 1725,
              value: "南山区"
            },
            {
              id: 1726,
              value: "向阳区"
            },
            {
              id: 1727,
              value: "工农区"
            },
            {
              id: 1728,
              value: "绥滨县"
            },
            {
              id: 1729,
              value: "萝北县"
            }
          ]
        },
        {
          id: 134,
          value: "双鸭山市",
          area: [{
              id: 1730,
              value: "友谊县"
            },
            {
              id: 1731,
              value: "四方台区"
            },
            {
              id: 1732,
              value: "宝山区"
            },
            {
              id: 1733,
              value: "宝清县"
            },
            {
              id: 1734,
              value: "尖山区"
            },
            {
              id: 1735,
              value: "岭东区"
            },
            {
              id: 1736,
              value: "集贤县"
            },
            {
              id: 1737,
              value: "饶河县"
            }
          ]
        },
        {
          id: 135,
          value: "大庆市",
          area: [{
              id: 1738,
              value: "大同区"
            },
            {
              id: 1739,
              value: "杜尔伯特蒙古族自治县"
            },
            {
              id: 1740,
              value: "林甸县"
            },
            {
              id: 1741,
              value: "红岗区"
            },
            {
              id: 1742,
              value: "肇州县"
            },
            {
              id: 1743,
              value: "肇源县"
            },
            {
              id: 1744,
              value: "胡路区"
            },
            {
              id: 1745,
              value: "萨尔图区"
            },
            {
              id: 1746,
              value: "龙凤区"
            }
          ]
        },
        {
          id: 136,
          value: "伊春市",
          area: [{
              id: 1747,
              value: "上甘岭区"
            },
            {
              id: 1748,
              value: "乌伊岭区"
            },
            {
              id: 1749,
              value: "乌马河区"
            },
            {
              id: 1750,
              value: "五营区"
            },
            {
              id: 1751,
              value: "伊春区"
            },
            {
              id: 1752,
              value: "南岔区"
            },
            {
              id: 1753,
              value: "友好区"
            },
            {
              id: 1754,
              value: "嘉荫县"
            },
            {
              id: 1755,
              value: "带岭区"
            },
            {
              id: 1756,
              value: "新青区"
            },
            {
              id: 1757,
              value: "汤旺河区"
            },
            {
              id: 1758,
              value: "红星区"
            },
            {
              id: 1759,
              value: "美溪区"
            },
            {
              id: 1760,
              value: "翠峦区"
            },
            {
              id: 1761,
              value: "西林区"
            },
            {
              id: 1762,
              value: "金山屯区"
            },
            {
              id: 1763,
              value: "铁力市"
            }
          ]
        },
        {
          id: 137,
          value: "佳木斯市",
          area: [{
              id: 1764,
              value: "东风区"
            },
            {
              id: 1765,
              value: "前进区"
            },
            {
              id: 1766,
              value: "同江市"
            },
            {
              id: 1767,
              value: "向阳区"
            },
            {
              id: 1768,
              value: "富锦市"
            },
            {
              id: 1769,
              value: "抚远县"
            },
            {
              id: 1770,
              value: "桦南县"
            },
            {
              id: 1771,
              value: "桦川县"
            },
            {
              id: 1772,
              value: "汤原县"
            },
            {
              id: 1773,
              value: "郊区"
            }
          ]
        },
        {
          id: 138,
          value: "七台河市",
          area: [{
              id: 1774,
              value: "勃利县"
            },
            {
              id: 1775,
              value: "新兴区"
            },
            {
              id: 1776,
              value: "桃山区"
            },
            {
              id: 1777,
              value: "茄子河区"
            }
          ]
        },
        {
          id: 139,
          value: "牡丹江市",
          area: [{
              id: 1778,
              value: "东宁县"
            },
            {
              id: 1779,
              value: "东安区"
            },
            {
              id: 1780,
              value: "宁安市"
            },
            {
              id: 1781,
              value: "林口县"
            },
            {
              id: 1782,
              value: "海林市"
            },
            {
              id: 1783,
              value: "爱民区"
            },
            {
              id: 1784,
              value: "穆棱市"
            },
            {
              id: 1785,
              value: "绥芬河市"
            },
            {
              id: 1786,
              value: "西安区"
            },
            {
              id: 1787,
              value: "阳明区"
            }
          ]
        },
        {
          id: 140,
          value: "黑河市",
          area: [{
              id: 1788,
              value: "五大连池市"
            },
            {
              id: 1789,
              value: "北安市"
            },
            {
              id: 1790,
              value: "嫩江县"
            },
            {
              id: 1791,
              value: "孙吴县"
            },
            {
              id: 1792,
              value: "爱辉区"
            },
            {
              id: 1793,
              value: "车逊克县"
            },
            {
              id: 1794,
              value: "逊克县"
            }
          ]
        },
        {
          id: 141,
          value: "绥化市",
          area: [{
              id: 1795,
              value: "兰西县"
            },
            {
              id: 1796,
              value: "安达市"
            },
            {
              id: 1797,
              value: "庆安县"
            },
            {
              id: 1798,
              value: "明水县"
            },
            {
              id: 1799,
              value: "望奎县"
            },
            {
              id: 1800,
              value: "海伦市"
            },
            {
              id: 1801,
              value: "绥化市北林区"
            },
            {
              id: 1802,
              value: "绥棱县"
            },
            {
              id: 1803,
              value: "肇东市"
            },
            {
              id: 1804,
              value: "青冈县"
            }
          ]
        },
        {
          id: 142,
          value: "大兴安岭地区",
          area: [{
              id: 1805,
              value: "呼玛县"
            },
            {
              id: 1806,
              value: "塔河县"
            },
            {
              id: 1807,
              value: "大兴安岭地区加格达奇区"
            },
            {
              id: 1808,
              value: "大兴安岭地区呼中区"
            },
            {
              id: 1809,
              value: "大兴安岭地区新林区"
            },
            {
              id: 1810,
              value: "大兴安岭地区松岭区"
            },
            {
              id: 1811,
              value: "漠河县"
            }
          ]
        }
      ]
    },
    {
      id: 9,
      value: "上海",
      city: [{
        id: 9,
        value: "上海",
        area: [{
            id: 143,
            value: "黄浦区"
          },
          {
            id: 144,
            value: "卢湾区"
          },
          {
            id: 145,
            value: "徐汇区"
          },
          {
            id: 146,
            value: "长宁区"
          },
          {
            id: 147,
            value: "静安区"
          },
          {
            id: 148,
            value: "普陀区"
          },
          {
            id: 149,
            value: "闸北区"
          },
          {
            id: 150,
            value: "虹口区"
          },
          {
            id: 151,
            value: "杨浦区"
          },
          {
            id: 152,
            value: "闵行区"
          },
          {
            id: 153,
            value: "宝山区"
          },
          {
            id: 154,
            value: "嘉定区"
          },
          {
            id: 155,
            value: "浦东新区"
          },
          {
            id: 156,
            value: "金山区"
          },
          {
            id: 157,
            value: "松江区"
          },
          {
            id: 158,
            value: "青浦区"
          },
          {
            id: 159,
            value: "南汇区"
          },
          {
            id: 160,
            value: "奉贤区"
          },
          {
            id: 161,
            value: "崇明县"
          }
        ]
      }]
    },
    {
      id: 10,
      value: "江苏",
      city: [{
          id: 162,
          value: "南京市",
          area: [{
              id: 2027,
              value: "下关区"
            },
            {
              id: 2028,
              value: "六合区"
            },
            {
              id: 2029,
              value: "建邺区"
            },
            {
              id: 2030,
              value: "栖霞区"
            },
            {
              id: 2031,
              value: "江宁区"
            },
            {
              id: 2032,
              value: "浦口区"
            },
            {
              id: 2033,
              value: "溧水县"
            },
            {
              id: 2034,
              value: "玄武区"
            },
            {
              id: 2035,
              value: "白下区"
            },
            {
              id: 2036,
              value: "秦淮区"
            },
            {
              id: 2037,
              value: "雨花台区"
            },
            {
              id: 2038,
              value: "高淳县"
            },
            {
              id: 2039,
              value: "鼓楼区"
            }
          ]
        },
        {
          id: 163,
          value: "无锡市",
          area: [{
              id: 2040,
              value: "北塘区"
            },
            {
              id: 2041,
              value: "南长区"
            },
            {
              id: 2042,
              value: "宜兴市"
            },
            {
              id: 2043,
              value: "崇安区"
            },
            {
              id: 2044,
              value: "惠山区"
            },
            {
              id: 2045,
              value: "江阴市"
            },
            {
              id: 2046,
              value: "滨湖区"
            },
            {
              id: 2047,
              value: "锡山区"
            }
          ]
        },
        {
          id: 164,
          value: "徐州市",
          area: [{
              id: 2048,
              value: "丰县"
            },
            {
              id: 2049,
              value: "九里区"
            },
            {
              id: 2050,
              value: "云龙区"
            },
            {
              id: 2051,
              value: "新沂市"
            },
            {
              id: 2052,
              value: "沛县"
            },
            {
              id: 2053,
              value: "泉山区"
            },
            {
              id: 2054,
              value: "睢宁县"
            },
            {
              id: 2055,
              value: "贾汪区"
            },
            {
              id: 2056,
              value: "邳州市"
            },
            {
              id: 2057,
              value: "铜山县"
            },
            {
              id: 2058,
              value: "鼓楼区"
            }
          ]
        },
        {
          id: 165,
          value: "常州市",
          area: [{
              id: 2059,
              value: "天宁区"
            },
            {
              id: 2060,
              value: "戚墅堰区"
            },
            {
              id: 2061,
              value: "新北区"
            },
            {
              id: 2062,
              value: "武进区"
            },
            {
              id: 2063,
              value: "溧阳市"
            },
            {
              id: 2064,
              value: "金坛市"
            },
            {
              id: 2065,
              value: "钟楼区"
            }
          ]
        },
        {
          id: 166,
          value: "苏州市",
          area: [{
              id: 2066,
              value: "吴中区"
            },
            {
              id: 2067,
              value: "吴江市"
            },
            {
              id: 2068,
              value: "太仓市"
            },
            {
              id: 2069,
              value: "常熟市"
            },
            {
              id: 2070,
              value: "平江区"
            },
            {
              id: 2071,
              value: "张家港市"
            },
            {
              id: 2072,
              value: "昆山市"
            },
            {
              id: 2073,
              value: "沧浪区"
            },
            {
              id: 2074,
              value: "相城区"
            },
            {
              id: 2075,
              value: "苏州工业园区"
            },
            {
              id: 2076,
              value: "虎丘区"
            },
            {
              id: 2077,
              value: "金阊区"
            }
          ]
        },
        {
          id: 167,
          value: "南通市",
          area: [{
              id: 2078,
              value: "启东市"
            },
            {
              id: 2079,
              value: "如东县"
            },
            {
              id: 2080,
              value: "如皋市"
            },
            {
              id: 2081,
              value: "崇川区"
            },
            {
              id: 2082,
              value: "海安县"
            },
            {
              id: 2083,
              value: "海门市"
            },
            {
              id: 2084,
              value: "港闸区"
            },
            {
              id: 2085,
              value: "通州市"
            }
          ]
        },
        {
          id: 168,
          value: "连云港市",
          area: [{
              id: 2086,
              value: "东海县"
            },
            {
              id: 2087,
              value: "新浦区"
            },
            {
              id: 2088,
              value: "海州区"
            },
            {
              id: 2089,
              value: "灌云县"
            },
            {
              id: 2090,
              value: "灌南县"
            },
            {
              id: 2091,
              value: "赣榆县"
            },
            {
              id: 2092,
              value: "连云区"
            }
          ]
        },
        {
          id: 169,
          value: "淮安市",
          area: [{
              id: 2093,
              value: "楚州区"
            },
            {
              id: 2094,
              value: "洪泽县"
            },
            {
              id: 2095,
              value: "涟水县"
            },
            {
              id: 2096,
              value: "淮阴区"
            },
            {
              id: 2097,
              value: "清河区"
            },
            {
              id: 2098,
              value: "清浦区"
            },
            {
              id: 2099,
              value: "盱眙县"
            },
            {
              id: 2100,
              value: "金湖县"
            }
          ]
        },
        {
          id: 170,
          value: "盐城市",
          area: [{
              id: 2101,
              value: "东台市"
            },
            {
              id: 2102,
              value: "亭湖区"
            },
            {
              id: 2103,
              value: "响水县"
            },
            {
              id: 2104,
              value: "大丰市"
            },
            {
              id: 2105,
              value: "射阳县"
            },
            {
              id: 2106,
              value: "建湖县"
            },
            {
              id: 2107,
              value: "滨海县"
            },
            {
              id: 2108,
              value: "盐都区"
            },
            {
              id: 2109,
              value: "阜宁县"
            }
          ]
        },
        {
          id: 171,
          value: "扬州市",
          area: [{
              id: 2110,
              value: "仪征市"
            },
            {
              id: 2111,
              value: "宝应县"
            },
            {
              id: 2112,
              value: "广陵区"
            },
            {
              id: 2113,
              value: "江都市"
            },
            {
              id: 2114,
              value: "维扬区"
            },
            {
              id: 2115,
              value: "邗江区"
            },
            {
              id: 2116,
              value: "高邮市"
            }
          ]
        },
        {
          id: 172,
          value: "镇江市",
          area: [{
              id: 2117,
              value: "丹徒区"
            },
            {
              id: 2118,
              value: "丹阳市"
            },
            {
              id: 2119,
              value: "京口区"
            },
            {
              id: 2120,
              value: "句容市"
            },
            {
              id: 2121,
              value: "扬中市"
            },
            {
              id: 2122,
              value: "润州区"
            }
          ]
        },
        {
          id: 173,
          value: "泰州市",
          area: [{
              id: 2123,
              value: "兴化市"
            },
            {
              id: 2124,
              value: "姜堰市"
            },
            {
              id: 2125,
              value: "泰兴市"
            },
            {
              id: 2126,
              value: "海陵区"
            },
            {
              id: 2127,
              value: "靖江市"
            },
            {
              id: 2128,
              value: "高港区"
            }
          ]
        },
        {
          id: 174,
          value: "宿迁市",
          area: [{
              id: 2129,
              value: "宿城区"
            },
            {
              id: 2130,
              value: "宿豫区"
            },
            {
              id: 2131,
              value: "沭阳县"
            },
            {
              id: 2132,
              value: "泗洪县"
            },
            {
              id: 2133,
              value: "泗阳县"
            }
          ]
        }
      ]
    },
    {
      id: 11,
      value: "浙江",
      city: [{
          id: 175,
          value: "杭州市",
          area: [{
              id: 2134,
              value: "上城区"
            },
            {
              id: 2135,
              value: "下城区"
            },
            {
              id: 2136,
              value: "临安市"
            },
            {
              id: 2137,
              value: "余杭区"
            },
            {
              id: 2138,
              value: "富阳市"
            },
            {
              id: 2139,
              value: "建德市"
            },
            {
              id: 2140,
              value: "拱墅区"
            },
            {
              id: 2141,
              value: "桐庐县"
            },
            {
              id: 2142,
              value: "江干区"
            },
            {
              id: 2143,
              value: "淳安县"
            },
            {
              id: 2144,
              value: "滨江区"
            },
            {
              id: 2145,
              value: "萧山区"
            },
            {
              id: 2146,
              value: "西湖区"
            }
          ]
        },
        {
          id: 176,
          value: "宁波市",
          area: [{
              id: 2147,
              value: "余姚市"
            },
            {
              id: 2148,
              value: "北仑区"
            },
            {
              id: 2149,
              value: "奉化市"
            },
            {
              id: 2150,
              value: "宁海县"
            },
            {
              id: 2151,
              value: "慈溪市"
            },
            {
              id: 2152,
              value: "江东区"
            },
            {
              id: 2153,
              value: "江北区"
            },
            {
              id: 2154,
              value: "海曙区"
            },
            {
              id: 2155,
              value: "象山县"
            },
            {
              id: 2156,
              value: "鄞州区"
            },
            {
              id: 2157,
              value: "镇海区"
            }
          ]
        },
        {
          id: 177,
          value: "温州市",
          area: [{
              id: 2158,
              value: "乐清市"
            },
            {
              id: 2159,
              value: "平阳县"
            },
            {
              id: 2160,
              value: "文成县"
            },
            {
              id: 2161,
              value: "永嘉县"
            },
            {
              id: 2162,
              value: "泰顺县"
            },
            {
              id: 2163,
              value: "洞头县"
            },
            {
              id: 2164,
              value: "瑞安市"
            },
            {
              id: 2165,
              value: "瓯海区"
            },
            {
              id: 2166,
              value: "苍南县"
            },
            {
              id: 2167,
              value: "鹿城区"
            },
            {
              id: 2168,
              value: "龙湾区"
            }
          ]
        },
        {
          id: 178,
          value: "嘉兴市",
          area: [{
              id: 2169,
              value: "南湖区"
            },
            {
              id: 2170,
              value: "嘉善县"
            },
            {
              id: 2171,
              value: "平湖市"
            },
            {
              id: 2172,
              value: "桐乡市"
            },
            {
              id: 2173,
              value: "海宁市"
            },
            {
              id: 2174,
              value: "海盐县"
            },
            {
              id: 2175,
              value: "秀洲区"
            }
          ]
        },
        {
          id: 179,
          value: "湖州市",
          area: [{
              id: 2176,
              value: "南浔区"
            },
            {
              id: 2177,
              value: "吴兴区"
            },
            {
              id: 2178,
              value: "安吉县"
            },
            {
              id: 2179,
              value: "德清县"
            },
            {
              id: 2180,
              value: "长兴县"
            }
          ]
        },
        {
          id: 180,
          value: "绍兴市",
          area: [{
              id: 2181,
              value: "上虞市"
            },
            {
              id: 2182,
              value: "嵊州市"
            },
            {
              id: 2183,
              value: "新昌县"
            },
            {
              id: 2184,
              value: "绍兴县"
            },
            {
              id: 2185,
              value: "诸暨市"
            },
            {
              id: 2186,
              value: "越城区"
            }
          ]
        },
        {
          id: 181,
          value: "舟山市",
          area: [{
              id: 2187,
              value: "定海区"
            },
            {
              id: 2188,
              value: "岱山县"
            },
            {
              id: 2189,
              value: "嵊泗县"
            },
            {
              id: 2190,
              value: "普陀区"
            }
          ]
        },
        {
          id: 182,
          value: "衢州市",
          area: [{
              id: 2191,
              value: "常山县"
            },
            {
              id: 2192,
              value: "开化县"
            },
            {
              id: 2193,
              value: "柯城区"
            },
            {
              id: 2194,
              value: "江山市"
            },
            {
              id: 2195,
              value: "衢江区"
            },
            {
              id: 2196,
              value: "龙游县"
            }
          ]
        },
        {
          id: 183,
          value: "金华市",
          area: [{
              id: 2197,
              value: "东阳市"
            },
            {
              id: 2198,
              value: "义乌市"
            },
            {
              id: 2199,
              value: "兰溪市"
            },
            {
              id: 2200,
              value: "婺城区"
            },
            {
              id: 2201,
              value: "武义县"
            },
            {
              id: 2202,
              value: "永康市"
            },
            {
              id: 2203,
              value: "浦江县"
            },
            {
              id: 2204,
              value: "磐安县"
            },
            {
              id: 2205,
              value: "金东区"
            }
          ]
        },
        {
          id: 184,
          value: "台州市",
          area: [{
              id: 2206,
              value: "三门县"
            },
            {
              id: 2207,
              value: "临海市"
            },
            {
              id: 2208,
              value: "仙居县"
            },
            {
              id: 2209,
              value: "天台县"
            },
            {
              id: 2210,
              value: "椒江区"
            },
            {
              id: 2211,
              value: "温岭市"
            },
            {
              id: 2212,
              value: "玉环县"
            },
            {
              id: 2213,
              value: "路桥区"
            },
            {
              id: 2214,
              value: "黄岩区"
            }
          ]
        },
        {
          id: 185,
          value: "丽水市",
          area: [{
              id: 2215,
              value: "云和县"
            },
            {
              id: 2216,
              value: "庆元县"
            },
            {
              id: 2217,
              value: "景宁畲族自治县"
            },
            {
              id: 2218,
              value: "松阳县"
            },
            {
              id: 2219,
              value: "缙云县"
            },
            {
              id: 2220,
              value: "莲都区"
            },
            {
              id: 2221,
              value: "遂昌县"
            },
            {
              id: 2222,
              value: "青田县"
            },
            {
              id: 2223,
              value: "龙泉市"
            }
          ]
        }
      ]
    },
    {
      id: 12,
      value: "安徽",
      city: [{
          id: 186,
          value: "合肥市",
          area: [{
              id: 2224,
              value: "包河区"
            },
            {
              id: 2225,
              value: "庐阳区"
            },
            {
              id: 2226,
              value: "瑶海区"
            },
            {
              id: 2227,
              value: "肥东县"
            },
            {
              id: 2228,
              value: "肥西县"
            },
            {
              id: 2229,
              value: "蜀山区"
            },
            {
              id: 2230,
              value: "长丰县"
            }
          ]
        },
        {
          id: 187,
          value: "芜湖市",
          area: [{
              id: 2231,
              value: "三山区"
            },
            {
              id: 2232,
              value: "南陵县"
            },
            {
              id: 2233,
              value: "弋江区"
            },
            {
              id: 2234,
              value: "繁昌县"
            },
            {
              id: 2235,
              value: "芜湖县"
            },
            {
              id: 2236,
              value: "镜湖区"
            },
            {
              id: 2237,
              value: "鸠江区"
            }
          ]
        },
        {
          id: 188,
          value: "蚌埠市",
          area: [{
              id: 2238,
              value: "五河县"
            },
            {
              id: 2239,
              value: "固镇县"
            },
            {
              id: 2240,
              value: "怀远县"
            },
            {
              id: 2241,
              value: "淮上区"
            },
            {
              id: 2242,
              value: "禹会区"
            },
            {
              id: 2243,
              value: "蚌山区"
            },
            {
              id: 2244,
              value: "龙子湖区"
            }
          ]
        },
        {
          id: 189,
          value: "淮南市",
          area: [{
              id: 2245,
              value: "八公山区"
            },
            {
              id: 2246,
              value: "凤台县"
            },
            {
              id: 2247,
              value: "大通区"
            },
            {
              id: 2248,
              value: "潘集区"
            },
            {
              id: 2249,
              value: "田家庵区"
            },
            {
              id: 2250,
              value: "谢家集区"
            }
          ]
        },
        {
          id: 190,
          value: "马鞍山市",
          area: [{
              id: 2251,
              value: "当涂县"
            },
            {
              id: 2252,
              value: "花山区"
            },
            {
              id: 2253,
              value: "金家庄区"
            },
            {
              id: 2254,
              value: "雨山区"
            }
          ]
        },
        {
          id: 191,
          value: "淮北市",
          area: [{
              id: 2255,
              value: "杜集区"
            },
            {
              id: 2256,
              value: "濉溪县"
            },
            {
              id: 2257,
              value: "烈山区"
            },
            {
              id: 2258,
              value: "相山区"
            }
          ]
        },
        {
          id: 192,
          value: "铜陵市",
          area: [{
              id: 2259,
              value: "狮子山区"
            },
            {
              id: 2260,
              value: "郊区"
            },
            {
              id: 2261,
              value: "铜官山区"
            },
            {
              id: 2262,
              value: "铜陵县"
            }
          ]
        },
        {
          id: 193,
          value: "安庆市",
          area: [{
              id: 2263,
              value: "大观区"
            },
            {
              id: 2264,
              value: "太湖县"
            },
            {
              id: 2265,
              value: "宜秀区"
            },
            {
              id: 2266,
              value: "宿松县"
            },
            {
              id: 2267,
              value: "岳西县"
            },
            {
              id: 2268,
              value: "怀宁县"
            },
            {
              id: 2269,
              value: "望江县"
            },
            {
              id: 2270,
              value: "枞阳县"
            },
            {
              id: 2271,
              value: "桐城市"
            },
            {
              id: 2272,
              value: "潜山县"
            },
            {
              id: 2273,
              value: "迎江区"
            }
          ]
        },
        {
          id: 194,
          value: "黄山市",
          area: [{
              id: 2274,
              value: "休宁县"
            },
            {
              id: 2275,
              value: "屯溪区"
            },
            {
              id: 2276,
              value: "徽州区"
            },
            {
              id: 2277,
              value: "歙县"
            },
            {
              id: 2278,
              value: "祁门县"
            },
            {
              id: 2279,
              value: "黄山区"
            },
            {
              id: 2280,
              value: "黟县"
            }
          ]
        },
        {
          id: 195,
          value: "滁州市",
          area: [{
              id: 2281,
              value: "全椒县"
            },
            {
              id: 2282,
              value: "凤阳县"
            },
            {
              id: 2283,
              value: "南谯区"
            },
            {
              id: 2284,
              value: "天长市"
            },
            {
              id: 2285,
              value: "定远县"
            },
            {
              id: 2286,
              value: "明光市"
            },
            {
              id: 2287,
              value: "来安县"
            },
            {
              id: 2288,
              value: "琅玡区"
            }
          ]
        },
        {
          id: 196,
          value: "阜阳市",
          area: [{
              id: 2289,
              value: "临泉县"
            },
            {
              id: 2290,
              value: "太和县"
            },
            {
              id: 2291,
              value: "界首市"
            },
            {
              id: 2292,
              value: "阜南县"
            },
            {
              id: 2293,
              value: "颍东区"
            },
            {
              id: 2294,
              value: "颍州区"
            },
            {
              id: 2295,
              value: "颍泉区"
            },
            {
              id: 2296,
              value: "颖上县"
            }
          ]
        },
        {
          id: 197,
          value: "宿州市",
          area: [{
              id: 2297,
              value: "埇桥区"
            },
            {
              id: 2298,
              value: "泗县辖"
            },
            {
              id: 2299,
              value: "灵璧县"
            },
            {
              id: 2300,
              value: "砀山县"
            },
            {
              id: 2301,
              value: "萧县"
            }
          ]
        },
        {
          id: 198,
          value: "巢湖市",
          area: [{
              id: 2302,
              value: "含山县"
            },
            {
              id: 2303,
              value: "和县"
            },
            {
              id: 2304,
              value: "居巢区"
            },
            {
              id: 2305,
              value: "庐江县"
            },
            {
              id: 2306,
              value: "无为县"
            }
          ]
        },
        {
          id: 199,
          value: "六安市",
          area: [{
              id: 2307,
              value: "寿县"
            },
            {
              id: 2308,
              value: "舒城县"
            },
            {
              id: 2309,
              value: "裕安区"
            },
            {
              id: 2310,
              value: "金安区"
            },
            {
              id: 2311,
              value: "金寨县"
            },
            {
              id: 2312,
              value: "霍山县"
            },
            {
              id: 2313,
              value: "霍邱县"
            }
          ]
        },
        {
          id: 200,
          value: "亳州市",
          area: [{
              id: 2314,
              value: "利辛县"
            },
            {
              id: 2315,
              value: "涡阳县"
            },
            {
              id: 2316,
              value: "蒙城县"
            },
            {
              id: 2317,
              value: "谯城区"
            }
          ]
        },
        {
          id: 201,
          value: "池州市",
          area: [{
              id: 2318,
              value: "东至县"
            },
            {
              id: 2319,
              value: "石台县"
            },
            {
              id: 2320,
              value: "贵池区"
            },
            {
              id: 2321,
              value: "青阳县"
            }
          ]
        },
        {
          id: 202,
          value: "宣城市",
          area: [{
              id: 2322,
              value: "宁国市"
            },
            {
              id: 2323,
              value: "宣州区"
            },
            {
              id: 2324,
              value: "广德县"
            },
            {
              id: 2325,
              value: "旌德县"
            },
            {
              id: 2326,
              value: "泾县"
            },
            {
              id: 2327,
              value: "绩溪县"
            },
            {
              id: 2328,
              value: "郎溪县"
            }
          ]
        }
      ]
    },
    {
      id: 13,
      value: "福建",
      city: [{
          id: 203,
          value: "福州市",
          area: [{
              id: 2329,
              value: "仓山区"
            },
            {
              id: 2330,
              value: "台江区"
            },
            {
              id: 2331,
              value: "平潭县"
            },
            {
              id: 2332,
              value: "晋安区"
            },
            {
              id: 2333,
              value: "永泰县"
            },
            {
              id: 2334,
              value: "福清市"
            },
            {
              id: 2335,
              value: "罗源县"
            },
            {
              id: 2336,
              value: "连江县"
            },
            {
              id: 2337,
              value: "长乐市"
            },
            {
              id: 2338,
              value: "闽侯县"
            },
            {
              id: 2339,
              value: "闽清县"
            },
            {
              id: 2340,
              value: "马尾区"
            },
            {
              id: 2341,
              value: "鼓楼区"
            }
          ]
        },
        {
          id: 204,
          value: "厦门市",
          area: [{
              id: 2342,
              value: "同安区"
            },
            {
              id: 2343,
              value: "思明区"
            },
            {
              id: 2344,
              value: "海沧区"
            },
            {
              id: 2345,
              value: "湖里区"
            },
            {
              id: 2346,
              value: "翔安区"
            },
            {
              id: 2347,
              value: "集美区"
            }
          ]
        },
        {
          id: 205,
          value: "莆田市",
          area: [{
              id: 2348,
              value: "仙游县"
            },
            {
              id: 2349,
              value: "城厢区"
            },
            {
              id: 2350,
              value: "涵江区"
            },
            {
              id: 2351,
              value: "秀屿区"
            },
            {
              id: 2352,
              value: "荔城区"
            }
          ]
        },
        {
          id: 206,
          value: "三明市",
          area: [{
              id: 2353,
              value: "三元区"
            },
            {
              id: 2354,
              value: "大田县"
            },
            {
              id: 2355,
              value: "宁化县"
            },
            {
              id: 2356,
              value: "将乐县"
            },
            {
              id: 2357,
              value: "尤溪县"
            },
            {
              id: 2358,
              value: "建宁县"
            },
            {
              id: 2359,
              value: "明溪县"
            },
            {
              id: 2360,
              value: "梅列区"
            },
            {
              id: 2361,
              value: "永安市"
            },
            {
              id: 2362,
              value: "沙县"
            },
            {
              id: 2363,
              value: "泰宁县"
            },
            {
              id: 2364,
              value: "清流县"
            }
          ]
        },
        {
          id: 207,
          value: "泉州市",
          area: [{
              id: 2365,
              value: "丰泽区"
            },
            {
              id: 2366,
              value: "南安市"
            },
            {
              id: 2367,
              value: "安溪县"
            },
            {
              id: 2368,
              value: "德化县"
            },
            {
              id: 2369,
              value: "惠安县"
            },
            {
              id: 2370,
              value: "晋江市"
            },
            {
              id: 2371,
              value: "永春县"
            },
            {
              id: 2372,
              value: "泉港区"
            },
            {
              id: 2373,
              value: "洛江区"
            },
            {
              id: 2374,
              value: "石狮市"
            },
            {
              id: 2375,
              value: "金门县"
            },
            {
              id: 2376,
              value: "鲤城区"
            }
          ]
        },
        {
          id: 208,
          value: "漳州市",
          area: [{
              id: 2377,
              value: "东山县"
            },
            {
              id: 2378,
              value: "云霄县"
            },
            {
              id: 2379,
              value: "华安县"
            },
            {
              id: 2380,
              value: "南靖县"
            },
            {
              id: 2381,
              value: "平和县"
            },
            {
              id: 2382,
              value: "漳浦县"
            },
            {
              id: 2383,
              value: "芗城区"
            },
            {
              id: 2384,
              value: "诏安县"
            },
            {
              id: 2385,
              value: "长泰县"
            },
            {
              id: 2386,
              value: "龙文区"
            },
            {
              id: 2387,
              value: "龙海市"
            }
          ]
        },
        {
          id: 209,
          value: "南平市",
          area: [{
              id: 2388,
              value: "光泽县"
            },
            {
              id: 2389,
              value: "延平区"
            },
            {
              id: 2390,
              value: "建瓯市"
            },
            {
              id: 2391,
              value: "建阳市"
            },
            {
              id: 2392,
              value: "政和县"
            },
            {
              id: 2393,
              value: "松溪县"
            },
            {
              id: 2394,
              value: "武夷山市"
            },
            {
              id: 2395,
              value: "浦城县"
            },
            {
              id: 2396,
              value: "邵武市"
            },
            {
              id: 2397,
              value: "顺昌县"
            }
          ]
        },
        {
          id: 210,
          value: "龙岩市",
          area: [{
              id: 2398,
              value: "上杭县"
            },
            {
              id: 2399,
              value: "新罗区"
            },
            {
              id: 2400,
              value: "武平县"
            },
            {
              id: 2401,
              value: "永定县"
            },
            {
              id: 2402,
              value: "漳平市"
            },
            {
              id: 2403,
              value: "连城县"
            },
            {
              id: 2404,
              value: "长汀县"
            }
          ]
        },
        {
          id: 211,
          value: "宁德市",
          area: [{
              id: 2405,
              value: "古田县"
            },
            {
              id: 2406,
              value: "周宁县"
            },
            {
              id: 2407,
              value: "寿宁县"
            },
            {
              id: 2408,
              value: "屏南县"
            },
            {
              id: 2409,
              value: "柘荣县"
            },
            {
              id: 2410,
              value: "福安市"
            },
            {
              id: 2411,
              value: "福鼎市"
            },
            {
              id: 2412,
              value: "蕉城区"
            },
            {
              id: 2413,
              value: "霞浦县"
            }
          ]
        }
      ]
    },
    {
      id: 14,
      value: "江西",
      city: [{
          id: 212,
          value: "南昌市",
          area: [{
              id: 2414,
              value: "东湖区"
            },
            {
              id: 2415,
              value: "南昌县"
            },
            {
              id: 2416,
              value: "安义县"
            },
            {
              id: 2417,
              value: "新建县"
            },
            {
              id: 2418,
              value: "湾里区"
            },
            {
              id: 2419,
              value: "西湖区"
            },
            {
              id: 2420,
              value: "进贤县"
            },
            {
              id: 2421,
              value: "青云谱区"
            },
            {
              id: 2422,
              value: "青山湖区"
            }
          ]
        },
        {
          id: 213,
          value: "景德镇市",
          area: [{
              id: 2423,
              value: "乐平市"
            },
            {
              id: 2424,
              value: "昌江区"
            },
            {
              id: 2425,
              value: "浮梁县"
            },
            {
              id: 2426,
              value: "珠山区"
            }
          ]
        },
        {
          id: 214,
          value: "萍乡市",
          area: [{
              id: 2427,
              value: "上栗县"
            },
            {
              id: 2428,
              value: "安源区"
            },
            {
              id: 2429,
              value: "湘东区"
            },
            {
              id: 2430,
              value: "芦溪县"
            },
            {
              id: 2431,
              value: "莲花县"
            }
          ]
        },
        {
          id: 215,
          value: "九江市",
          area: [{
              id: 2432,
              value: "九江县"
            },
            {
              id: 2433,
              value: "修水县"
            },
            {
              id: 2434,
              value: "庐山区"
            },
            {
              id: 2435,
              value: "彭泽县"
            },
            {
              id: 2436,
              value: "德安县"
            },
            {
              id: 2437,
              value: "星子县"
            },
            {
              id: 2438,
              value: "武宁县"
            },
            {
              id: 2439,
              value: "永修县"
            },
            {
              id: 2440,
              value: "浔阳区"
            },
            {
              id: 2441,
              value: "湖口县"
            },
            {
              id: 2442,
              value: "瑞昌市"
            },
            {
              id: 2443,
              value: "都昌县"
            }
          ]
        },
        {
          id: 216,
          value: "新余市",
          area: [{
              id: 2444,
              value: "分宜县"
            },
            {
              id: 2445,
              value: "渝水区"
            }
          ]
        },
        {
          id: 217,
          value: "鹰潭市",
          area: [{
              id: 2446,
              value: "余江县"
            },
            {
              id: 2447,
              value: "月湖区"
            },
            {
              id: 2448,
              value: "贵溪市"
            }
          ]
        },
        {
          id: 218,
          value: "赣州市",
          area: [{
              id: 2449,
              value: "上犹县"
            },
            {
              id: 2450,
              value: "于都县"
            },
            {
              id: 2451,
              value: "会昌县"
            },
            {
              id: 2452,
              value: "信丰县"
            },
            {
              id: 2453,
              value: "全南县"
            },
            {
              id: 2454,
              value: "兴国县"
            },
            {
              id: 2455,
              value: "南康市"
            },
            {
              id: 2456,
              value: "大余县"
            },
            {
              id: 2457,
              value: "宁都县"
            },
            {
              id: 2458,
              value: "安远县"
            },
            {
              id: 2459,
              value: "定南县"
            },
            {
              id: 2460,
              value: "寻乌县"
            },
            {
              id: 2461,
              value: "崇义县"
            },
            {
              id: 2462,
              value: "瑞金市"
            },
            {
              id: 2463,
              value: "石城县"
            },
            {
              id: 2464,
              value: "章贡区"
            },
            {
              id: 2465,
              value: "赣县"
            },
            {
              id: 2466,
              value: "龙南县"
            }
          ]
        },
        {
          id: 219,
          value: "吉安市",
          area: [{
              id: 2467,
              value: "万安县"
            },
            {
              id: 2468,
              value: "井冈山市"
            },
            {
              id: 2469,
              value: "吉安县"
            },
            {
              id: 2470,
              value: "吉州区"
            },
            {
              id: 2471,
              value: "吉水县"
            },
            {
              id: 2472,
              value: "安福县"
            },
            {
              id: 2473,
              value: "峡江县"
            },
            {
              id: 2474,
              value: "新干县"
            },
            {
              id: 2475,
              value: "永丰县"
            },
            {
              id: 2476,
              value: "永新县"
            },
            {
              id: 2477,
              value: "泰和县"
            },
            {
              id: 2478,
              value: "遂川县"
            },
            {
              id: 2479,
              value: "青原区"
            }
          ]
        },
        {
          id: 220,
          value: "宜春市",
          area: [{
              id: 2480,
              value: "万载县"
            },
            {
              id: 2481,
              value: "上高县"
            },
            {
              id: 2482,
              value: "丰城市"
            },
            {
              id: 2483,
              value: "奉新县"
            },
            {
              id: 2484,
              value: "宜丰县"
            },
            {
              id: 2485,
              value: "樟树市"
            },
            {
              id: 2486,
              value: "袁州区"
            },
            {
              id: 2487,
              value: "铜鼓县"
            },
            {
              id: 2488,
              value: "靖安县"
            },
            {
              id: 2489,
              value: "高安市"
            }
          ]
        },
        {
          id: 221,
          value: "抚州市",
          area: [{
              id: 2490,
              value: "东乡县"
            },
            {
              id: 2491,
              value: "临川区"
            },
            {
              id: 2492,
              value: "乐安县"
            },
            {
              id: 2493,
              value: "南丰县"
            },
            {
              id: 2494,
              value: "南城县"
            },
            {
              id: 2495,
              value: "宜黄县"
            },
            {
              id: 2496,
              value: "崇仁县"
            },
            {
              id: 2497,
              value: "广昌县"
            },
            {
              id: 2498,
              value: "资溪县"
            },
            {
              id: 2499,
              value: "金溪县"
            },
            {
              id: 2500,
              value: "黎川县"
            }
          ]
        },
        {
          id: 222,
          value: "上饶市",
          area: [{
              id: 2501,
              value: "万年县"
            },
            {
              id: 2502,
              value: "上饶县"
            },
            {
              id: 2503,
              value: "余干县"
            },
            {
              id: 2504,
              value: "信州区"
            },
            {
              id: 2505,
              value: "婺源县"
            },
            {
              id: 2506,
              value: "广丰县"
            },
            {
              id: 2507,
              value: "弋阳县"
            },
            {
              id: 2508,
              value: "德兴市"
            },
            {
              id: 2509,
              value: "横峰县"
            },
            {
              id: 2510,
              value: "玉山县"
            },
            {
              id: 2511,
              value: "鄱阳县"
            },
            {
              id: 2512,
              value: "铅山县"
            }
          ]
        }
      ]
    },
    {
      id: 15,
      value: "山东",
      city: [{
          id: 223,
          value: "济南市",
          area: [{
              id: 2513,
              value: "历下区"
            },
            {
              id: 2514,
              value: "历城区"
            },
            {
              id: 2515,
              value: "商河县"
            },
            {
              id: 2516,
              value: "天桥区"
            },
            {
              id: 2517,
              value: "市中区"
            },
            {
              id: 2518,
              value: "平阴县"
            },
            {
              id: 2519,
              value: "槐荫区"
            },
            {
              id: 2520,
              value: "济阳县"
            },
            {
              id: 2521,
              value: "章丘市"
            },
            {
              id: 2522,
              value: "长清区"
            }
          ]
        },
        {
          id: 224,
          value: "青岛市",
          area: [{
              id: 2523,
              value: "即墨市"
            },
            {
              id: 2524,
              value: "四方区"
            },
            {
              id: 2525,
              value: "城阳区"
            },
            {
              id: 2526,
              value: "崂山区"
            },
            {
              id: 2527,
              value: "市北区"
            },
            {
              id: 2528,
              value: "市南区"
            },
            {
              id: 2529,
              value: "平度市"
            },
            {
              id: 2530,
              value: "李沧区"
            },
            {
              id: 2531,
              value: "胶南市"
            },
            {
              id: 2532,
              value: "胶州市"
            },
            {
              id: 2533,
              value: "莱西市"
            },
            {
              id: 2534,
              value: "黄岛区"
            }
          ]
        },
        {
          id: 225,
          value: "淄博市",
          area: [{
              id: 2535,
              value: "临淄区"
            },
            {
              id: 2536,
              value: "博山区"
            },
            {
              id: 2537,
              value: "周村区"
            },
            {
              id: 2538,
              value: "张店区"
            },
            {
              id: 2539,
              value: "桓台县"
            },
            {
              id: 2540,
              value: "沂源县"
            },
            {
              id: 2541,
              value: "淄川区"
            },
            {
              id: 2542,
              value: "高青县"
            }
          ]
        },
        {
          id: 226,
          value: "枣庄市",
          area: [{
              id: 2543,
              value: "台儿庄区"
            },
            {
              id: 2544,
              value: "山亭区"
            },
            {
              id: 2545,
              value: "峄城区"
            },
            {
              id: 2546,
              value: "市中区"
            },
            {
              id: 2547,
              value: "滕州市"
            },
            {
              id: 2548,
              value: "薛城区"
            }
          ]
        },
        {
          id: 227,
          value: "东营市",
          area: [{
              id: 2549,
              value: "东营区"
            },
            {
              id: 2550,
              value: "利津县"
            },
            {
              id: 2551,
              value: "垦利县"
            },
            {
              id: 2552,
              value: "广饶县"
            },
            {
              id: 2553,
              value: "河口区"
            }
          ]
        },
        {
          id: 228,
          value: "烟台市",
          area: [{
              id: 2554,
              value: "招远市"
            },
            {
              id: 2555,
              value: "栖霞市"
            },
            {
              id: 2556,
              value: "海阳市"
            },
            {
              id: 2557,
              value: "牟平区"
            },
            {
              id: 2558,
              value: "福山区"
            },
            {
              id: 2559,
              value: "芝罘区"
            },
            {
              id: 2560,
              value: "莱山区"
            },
            {
              id: 2561,
              value: "莱州市"
            },
            {
              id: 2562,
              value: "莱阳市"
            },
            {
              id: 2563,
              value: "蓬莱市"
            },
            {
              id: 2564,
              value: "长岛县"
            },
            {
              id: 2565,
              value: "龙口市"
            }
          ]
        },
        {
          id: 229,
          value: "潍坊市",
          area: [{
              id: 2566,
              value: "临朐县"
            },
            {
              id: 2567,
              value: "坊子区"
            },
            {
              id: 2568,
              value: "奎文区"
            },
            {
              id: 2569,
              value: "安丘市"
            },
            {
              id: 2570,
              value: "寒亭区"
            },
            {
              id: 2571,
              value: "寿光市"
            },
            {
              id: 2572,
              value: "昌乐县"
            },
            {
              id: 2573,
              value: "昌邑市"
            },
            {
              id: 2574,
              value: "潍城区"
            },
            {
              id: 2575,
              value: "诸城市"
            },
            {
              id: 2576,
              value: "青州市"
            },
            {
              id: 2577,
              value: "高密市"
            }
          ]
        },
        {
          id: 230,
          value: "济宁市",
          area: [{
              id: 2578,
              value: "任城区"
            },
            {
              id: 2579,
              value: "兖州市"
            },
            {
              id: 2580,
              value: "嘉祥县"
            },
            {
              id: 2581,
              value: "市中区"
            },
            {
              id: 2582,
              value: "微山县"
            },
            {
              id: 2583,
              value: "曲阜市"
            },
            {
              id: 2584,
              value: "梁山县"
            },
            {
              id: 2585,
              value: "汶上县"
            },
            {
              id: 2586,
              value: "泗水县"
            },
            {
              id: 2587,
              value: "邹城市"
            },
            {
              id: 2588,
              value: "金乡县"
            },
            {
              id: 2589,
              value: "鱼台县"
            }
          ]
        },
        {
          id: 231,
          value: "泰安市",
          area: [{
              id: 2590,
              value: "东平县"
            },
            {
              id: 2591,
              value: "宁阳县"
            },
            {
              id: 2592,
              value: "岱岳区"
            },
            {
              id: 2593,
              value: "新泰市"
            },
            {
              id: 2594,
              value: "泰山区"
            },
            {
              id: 2595,
              value: "肥城市"
            }
          ]
        },
        {
          id: 232,
          value: "威海市",
          area: [{
              id: 2596,
              value: "乳山市"
            },
            {
              id: 2597,
              value: "文登市"
            },
            {
              id: 2598,
              value: "环翠区"
            },
            {
              id: 2599,
              value: "荣成市"
            }
          ]
        },
        {
          id: 233,
          value: "日照市",
          area: [{
              id: 2600,
              value: "东港区"
            },
            {
              id: 2601,
              value: "五莲县"
            },
            {
              id: 2602,
              value: "岚山区"
            },
            {
              id: 2603,
              value: "莒县"
            }
          ]
        },
        {
          id: 234,
          value: "莱芜市",
          area: [{
              id: 2604,
              value: "莱城区"
            },
            {
              id: 2605,
              value: "钢城区"
            }
          ]
        },
        {
          id: 235,
          value: "临沂市",
          area: [{
              id: 2606,
              value: "临沭县"
            },
            {
              id: 2607,
              value: "兰山区"
            },
            {
              id: 2608,
              value: "平邑县"
            },
            {
              id: 2609,
              value: "沂南县"
            },
            {
              id: 2610,
              value: "沂水县"
            },
            {
              id: 2611,
              value: "河东区"
            },
            {
              id: 2612,
              value: "罗庄区"
            },
            {
              id: 2613,
              value: "苍山县"
            },
            {
              id: 2614,
              value: "莒南县"
            },
            {
              id: 2615,
              value: "蒙阴县"
            },
            {
              id: 2616,
              value: "费县"
            },
            {
              id: 2617,
              value: "郯城县"
            }
          ]
        },
        {
          id: 236,
          value: "德州市",
          area: [{
              id: 2618,
              value: "临邑县"
            },
            {
              id: 2619,
              value: "乐陵市"
            },
            {
              id: 2620,
              value: "夏津县"
            },
            {
              id: 2621,
              value: "宁津县"
            },
            {
              id: 2622,
              value: "平原县"
            },
            {
              id: 2623,
              value: "庆云县"
            },
            {
              id: 2624,
              value: "德城区"
            },
            {
              id: 2625,
              value: "武城县"
            },
            {
              id: 2626,
              value: "禹城市"
            },
            {
              id: 2627,
              value: "陵县"
            },
            {
              id: 2628,
              value: "齐河县"
            }
          ]
        },
        {
          id: 237,
          value: "聊城市",
          area: [{
              id: 2629,
              value: "东昌府区"
            },
            {
              id: 2630,
              value: "东阿县"
            },
            {
              id: 2631,
              value: "临清市"
            },
            {
              id: 2632,
              value: "冠县"
            },
            {
              id: 2633,
              value: "茌平县"
            },
            {
              id: 2634,
              value: "莘县"
            },
            {
              id: 2635,
              value: "阳谷县"
            },
            {
              id: 2636,
              value: "高唐县"
            }
          ]
        },
        {
          id: 238,
          value: "滨州市",
          area: [{
              id: 2637,
              value: "博兴县"
            },
            {
              id: 2638,
              value: "惠民县"
            },
            {
              id: 2639,
              value: "无棣县"
            },
            {
              id: 2640,
              value: "沾化县"
            },
            {
              id: 2641,
              value: "滨城区"
            },
            {
              id: 2642,
              value: "邹平县"
            },
            {
              id: 2643,
              value: "阳信县"
            }
          ]
        },
        {
          id: 239,
          value: "菏泽市",
          area: [{
              id: 2644,
              value: "东明县"
            },
            {
              id: 2645,
              value: "单县"
            },
            {
              id: 2646,
              value: "定陶县"
            },
            {
              id: 2647,
              value: "巨野县"
            },
            {
              id: 2648,
              value: "成武县"
            },
            {
              id: 2649,
              value: "曹县"
            },
            {
              id: 2650,
              value: "牡丹区"
            },
            {
              id: 2651,
              value: "郓城县"
            },
            {
              id: 2652,
              value: "鄄城县"
            }
          ]
        }
      ]
    },
    {
      id: 16,
      value: "河南",
      city: [{
          id: 240,
          value: "郑州市",
          area: [{
              id: 2653,
              value: "上街区"
            },
            {
              id: 2654,
              value: "中原区"
            },
            {
              id: 2655,
              value: "中牟县"
            },
            {
              id: 2656,
              value: "二七区"
            },
            {
              id: 2657,
              value: "巩义市"
            },
            {
              id: 2658,
              value: "惠济区"
            },
            {
              id: 2659,
              value: "新密市"
            },
            {
              id: 2660,
              value: "新郑市"
            },
            {
              id: 2661,
              value: "登封市"
            },
            {
              id: 2662,
              value: "管城回族区"
            },
            {
              id: 2663,
              value: "荥阳市"
            },
            {
              id: 2664,
              value: "金水区"
            }
          ]
        },
        {
          id: 241,
          value: "开封市",
          area: [{
              id: 2665,
              value: "兰考县"
            },
            {
              id: 2666,
              value: "尉氏县"
            },
            {
              id: 2667,
              value: "开封县"
            },
            {
              id: 2668,
              value: "杞县"
            },
            {
              id: 2669,
              value: "禹王台区"
            },
            {
              id: 2670,
              value: "通许县"
            },
            {
              id: 2671,
              value: "金明区"
            },
            {
              id: 2672,
              value: "顺河回族区"
            },
            {
              id: 2673,
              value: "鼓楼区"
            },
            {
              id: 2674,
              value: "龙亭区"
            }
          ]
        },
        {
          id: 242,
          value: "洛阳市",
          area: [{
              id: 2675,
              value: "伊川县"
            },
            {
              id: 2676,
              value: "偃师市"
            },
            {
              id: 2677,
              value: "吉利区"
            },
            {
              id: 2678,
              value: "孟津县"
            },
            {
              id: 2679,
              value: "宜阳县"
            },
            {
              id: 2680,
              value: "嵩县"
            },
            {
              id: 2681,
              value: "新安县"
            },
            {
              id: 2682,
              value: "栾川县"
            },
            {
              id: 2683,
              value: "汝阳县"
            },
            {
              id: 2684,
              value: "洛宁县"
            },
            {
              id: 2685,
              value: "洛龙区"
            },
            {
              id: 2686,
              value: "涧西区"
            },
            {
              id: 2687,
              value: "瀍河回族区"
            },
            {
              id: 2688,
              value: "老城区"
            },
            {
              id: 2689,
              value: "西工区"
            }
          ]
        },
        {
          id: 243,
          value: "平顶山市",
          area: [{
              id: 2690,
              value: "卫东区"
            },
            {
              id: 2691,
              value: "叶县"
            },
            {
              id: 2692,
              value: "宝丰县"
            },
            {
              id: 2693,
              value: "新华区"
            },
            {
              id: 2694,
              value: "汝州市"
            },
            {
              id: 2695,
              value: "湛河区"
            },
            {
              id: 2696,
              value: "石龙区"
            },
            {
              id: 2697,
              value: "舞钢市"
            },
            {
              id: 2698,
              value: "郏县"
            },
            {
              id: 2699,
              value: "鲁山县"
            }
          ]
        },
        {
          id: 244,
          value: "安阳市",
          area: [{
              id: 2700,
              value: "内黄县"
            },
            {
              id: 2701,
              value: "北关区"
            },
            {
              id: 2702,
              value: "安阳县"
            },
            {
              id: 2703,
              value: "文峰区"
            },
            {
              id: 2704,
              value: "林州市"
            },
            {
              id: 2705,
              value: "殷都区"
            },
            {
              id: 2706,
              value: "汤阴县"
            },
            {
              id: 2707,
              value: "滑县"
            },
            {
              id: 2708,
              value: "龙安区"
            }
          ]
        },
        {
          id: 245,
          value: "鹤壁市",
          area: [{
              id: 2709,
              value: "山城区"
            },
            {
              id: 2710,
              value: "浚县"
            },
            {
              id: 2711,
              value: "淇县"
            },
            {
              id: 2712,
              value: "淇滨区"
            },
            {
              id: 2713,
              value: "鹤山区"
            }
          ]
        },
        {
          id: 246,
          value: "新乡市",
          area: [{
              id: 2714,
              value: "凤泉区"
            },
            {
              id: 2715,
              value: "卫滨区"
            },
            {
              id: 2716,
              value: "卫辉市"
            },
            {
              id: 2717,
              value: "原阳县"
            },
            {
              id: 2718,
              value: "封丘县"
            },
            {
              id: 2719,
              value: "延津县"
            },
            {
              id: 2720,
              value: "新乡县"
            },
            {
              id: 2721,
              value: "牧野区"
            },
            {
              id: 2722,
              value: "红旗区"
            },
            {
              id: 2723,
              value: "获嘉县"
            },
            {
              id: 2724,
              value: "辉县市"
            },
            {
              id: 2725,
              value: "长垣县"
            }
          ]
        },
        {
          id: 247,
          value: "焦作市",
          area: [{
              id: 2726,
              value: "中站区"
            },
            {
              id: 2727,
              value: "修武县"
            },
            {
              id: 2728,
              value: "博爱县"
            },
            {
              id: 2729,
              value: "孟州市"
            },
            {
              id: 2730,
              value: "山阳区"
            },
            {
              id: 2731,
              value: "武陟县"
            },
            {
              id: 2732,
              value: "沁阳市"
            },
            {
              id: 2733,
              value: "温县"
            },
            {
              id: 2734,
              value: "解放区"
            },
            {
              id: 2735,
              value: "马村区"
            }
          ]
        },
        {
          id: 248,
          value: "濮阳市",
          area: [{
              id: 2736,
              value: "华龙区"
            },
            {
              id: 2737,
              value: "南乐县"
            },
            {
              id: 2738,
              value: "台前县"
            },
            {
              id: 2739,
              value: "清丰县"
            },
            {
              id: 2740,
              value: "濮阳县"
            },
            {
              id: 2741,
              value: "范县"
            }
          ]
        },
        {
          id: 249,
          value: "许昌市",
          area: [{
              id: 2742,
              value: "禹州市"
            },
            {
              id: 2743,
              value: "襄城县"
            },
            {
              id: 2744,
              value: "许昌县"
            },
            {
              id: 2745,
              value: "鄢陵县"
            },
            {
              id: 2746,
              value: "长葛市"
            },
            {
              id: 2747,
              value: "魏都区"
            }
          ]
        },
        {
          id: 250,
          value: "漯河市",
          area: [{
              id: 2748,
              value: "临颍县"
            },
            {
              id: 2749,
              value: "召陵区"
            },
            {
              id: 2750,
              value: "源汇区"
            },
            {
              id: 2751,
              value: "舞阳县"
            },
            {
              id: 2752,
              value: "郾城区"
            }
          ]
        },
        {
          id: 251,
          value: "三门峡市",
          area: [{
              id: 2753,
              value: "义马市"
            },
            {
              id: 2754,
              value: "卢氏县"
            },
            {
              id: 2755,
              value: "渑池县"
            },
            {
              id: 2756,
              value: "湖滨区"
            },
            {
              id: 2757,
              value: "灵宝市"
            },
            {
              id: 2758,
              value: "陕县"
            }
          ]
        },
        {
          id: 252,
          value: "南阳市",
          area: [{
              id: 2759,
              value: "内乡县"
            },
            {
              id: 2760,
              value: "南召县"
            },
            {
              id: 2761,
              value: "卧龙区"
            },
            {
              id: 2762,
              value: "唐河县"
            },
            {
              id: 2763,
              value: "宛城区"
            },
            {
              id: 2764,
              value: "新野县"
            },
            {
              id: 2765,
              value: "方城县"
            },
            {
              id: 2766,
              value: "桐柏县"
            },
            {
              id: 2767,
              value: "淅川县"
            },
            {
              id: 2768,
              value: "社旗县"
            },
            {
              id: 2769,
              value: "西峡县"
            },
            {
              id: 2770,
              value: "邓州市"
            },
            {
              id: 2771,
              value: "镇平县"
            }
          ]
        },
        {
          id: 253,
          value: "商丘市",
          area: [{
              id: 2772,
              value: "夏邑县"
            },
            {
              id: 2773,
              value: "宁陵县"
            },
            {
              id: 2774,
              value: "柘城县"
            },
            {
              id: 2775,
              value: "民权县"
            },
            {
              id: 2776,
              value: "永城市"
            },
            {
              id: 2777,
              value: "睢县"
            },
            {
              id: 2778,
              value: "睢阳区"
            },
            {
              id: 2779,
              value: "粱园区"
            },
            {
              id: 2780,
              value: "虞城县"
            }
          ]
        },
        {
          id: 254,
          value: "信阳市",
          area: [{
              id: 2781,
              value: "光山县"
            },
            {
              id: 2782,
              value: "商城县"
            },
            {
              id: 2783,
              value: "固始县"
            },
            {
              id: 2784,
              value: "平桥区"
            },
            {
              id: 2785,
              value: "息县"
            },
            {
              id: 2786,
              value: "新县"
            },
            {
              id: 2787,
              value: "浉河区"
            },
            {
              id: 2788,
              value: "淮滨县"
            },
            {
              id: 2789,
              value: "潢川县"
            },
            {
              id: 2790,
              value: "罗山县"
            }
          ]
        },
        {
          id: 255,
          value: "周口市",
          area: [{
              id: 2791,
              value: "商水县"
            },
            {
              id: 2792,
              value: "太康县"
            },
            {
              id: 2793,
              value: "川汇区"
            },
            {
              id: 2794,
              value: "扶沟县"
            },
            {
              id: 2795,
              value: "沈丘县"
            },
            {
              id: 2796,
              value: "淮阳县"
            },
            {
              id: 2797,
              value: "西华县"
            },
            {
              id: 2798,
              value: "郸城县"
            },
            {
              id: 2799,
              value: "项城市"
            },
            {
              id: 2800,
              value: "鹿邑县"
            }
          ]
        },
        {
          id: 256,
          value: "驻马店市",
          area: [{
              id: 2801,
              value: "上蔡县"
            },
            {
              id: 2802,
              value: "平舆县"
            },
            {
              id: 2803,
              value: "新蔡县"
            },
            {
              id: 2804,
              value: "正阳县"
            },
            {
              id: 2805,
              value: "汝南县"
            },
            {
              id: 2806,
              value: "泌阳县"
            },
            {
              id: 2807,
              value: "确山县"
            },
            {
              id: 2808,
              value: "西平县"
            },
            {
              id: 2809,
              value: "遂平县"
            },
            {
              id: 2810,
              value: "驿城区"
            }
          ]
        },
        {
          id: 257,
          value: "济源市",
          area: [{
            id: 2811,
            value: "济源市"
          }]
        }
      ]
    },
    {
      id: 17,
      value: "湖北",
      city: [{
          id: 258,
          value: "武汉市",
          area: [{
              id: 2812,
              value: "东西湖区"
            },
            {
              id: 2813,
              value: "新洲区"
            },
            {
              id: 2814,
              value: "武昌区"
            },
            {
              id: 2815,
              value: "汉南区"
            },
            {
              id: 2816,
              value: "汉阳区"
            },
            {
              id: 2817,
              value: "江夏区"
            },
            {
              id: 2818,
              value: "江岸区"
            },
            {
              id: 2819,
              value: "江汉区"
            },
            {
              id: 2820,
              value: "洪山区"
            },
            {
              id: 2821,
              value: "硚口区"
            },
            {
              id: 2822,
              value: "蔡甸区"
            },
            {
              id: 2823,
              value: "青山区"
            },
            {
              id: 2824,
              value: "黄陂区"
            }
          ]
        },
        {
          id: 259,
          value: "黄石市",
          area: [{
              id: 2825,
              value: "下陆区"
            },
            {
              id: 2826,
              value: "大冶市"
            },
            {
              id: 2827,
              value: "西塞山区"
            },
            {
              id: 2828,
              value: "铁山区"
            },
            {
              id: 2829,
              value: "阳新县"
            },
            {
              id: 2830,
              value: "黄石港区"
            }
          ]
        },
        {
          id: 260,
          value: "十堰市",
          area: [{
              id: 2831,
              value: "丹江口市"
            },
            {
              id: 2832,
              value: "张湾区"
            },
            {
              id: 2833,
              value: "房县"
            },
            {
              id: 2834,
              value: "竹山县"
            },
            {
              id: 2835,
              value: "竹溪县"
            },
            {
              id: 2836,
              value: "茅箭区"
            },
            {
              id: 2837,
              value: "郧县"
            },
            {
              id: 2838,
              value: "郧西县"
            }
          ]
        },
        {
          id: 261,
          value: "宜昌市",
          area: [{
              id: 2839,
              value: "五峰土家族自治县"
            },
            {
              id: 2840,
              value: "伍家岗区"
            },
            {
              id: 2841,
              value: "兴山县"
            },
            {
              id: 2842,
              value: "夷陵区"
            },
            {
              id: 2843,
              value: "宜都市"
            },
            {
              id: 2844,
              value: "当阳市"
            },
            {
              id: 2845,
              value: "枝江市"
            },
            {
              id: 2846,
              value: "点军区"
            },
            {
              id: 2847,
              value: "秭归县"
            },
            {
              id: 2848,
              value: "虢亭区"
            },
            {
              id: 2849,
              value: "西陵区"
            },
            {
              id: 2850,
              value: "远安县"
            },
            {
              id: 2851,
              value: "长阳土家族自治县"
            }
          ]
        },
        {
          id: 262,
          value: "襄樊市",
          area: [{
              id: 2852,
              value: "保康县"
            },
            {
              id: 2853,
              value: "南漳县"
            },
            {
              id: 2854,
              value: "宜城市"
            },
            {
              id: 2855,
              value: "枣阳市"
            },
            {
              id: 2856,
              value: "樊城区"
            },
            {
              id: 2857,
              value: "老河口市"
            },
            {
              id: 2858,
              value: "襄城区"
            },
            {
              id: 2859,
              value: "襄阳区"
            },
            {
              id: 2860,
              value: "谷城县"
            }
          ]
        },
        {
          id: 263,
          value: "鄂州市",
          area: [{
              id: 2861,
              value: "华容区"
            },
            {
              id: 2862,
              value: "粱子湖"
            },
            {
              id: 2863,
              value: "鄂城区"
            }
          ]
        },
        {
          id: 264,
          value: "荆门市",
          area: [{
              id: 2864,
              value: "东宝区"
            },
            {
              id: 2865,
              value: "京山县"
            },
            {
              id: 2866,
              value: "掇刀区"
            },
            {
              id: 2867,
              value: "沙洋县"
            },
            {
              id: 2868,
              value: "钟祥市"
            }
          ]
        },
        {
          id: 265,
          value: "孝感市",
          area: [{
              id: 2869,
              value: "云梦县"
            },
            {
              id: 2870,
              value: "大悟县"
            },
            {
              id: 2871,
              value: "孝南区"
            },
            {
              id: 2872,
              value: "孝昌县"
            },
            {
              id: 2873,
              value: "安陆市"
            },
            {
              id: 2874,
              value: "应城市"
            },
            {
              id: 2875,
              value: "汉川市"
            }
          ]
        },
        {
          id: 266,
          value: "荆州市",
          area: [{
              id: 2876,
              value: "公安县"
            },
            {
              id: 2877,
              value: "松滋市"
            },
            {
              id: 2878,
              value: "江陵县"
            },
            {
              id: 2879,
              value: "沙市区"
            },
            {
              id: 2880,
              value: "洪湖市"
            },
            {
              id: 2881,
              value: "监利县"
            },
            {
              id: 2882,
              value: "石首市"
            },
            {
              id: 2883,
              value: "荆州区"
            }
          ]
        },
        {
          id: 267,
          value: "黄冈市",
          area: [{
              id: 2884,
              value: "团风县"
            },
            {
              id: 2885,
              value: "武穴市"
            },
            {
              id: 2886,
              value: "浠水县"
            },
            {
              id: 2887,
              value: "红安县"
            },
            {
              id: 2888,
              value: "罗田县"
            },
            {
              id: 2889,
              value: "英山县"
            },
            {
              id: 2890,
              value: "蕲春县"
            },
            {
              id: 2891,
              value: "麻城市"
            },
            {
              id: 2892,
              value: "黄州区"
            },
            {
              id: 2893,
              value: "黄梅县"
            }
          ]
        },
        {
          id: 268,
          value: "咸宁市",
          area: [{
              id: 2894,
              value: "咸安区"
            },
            {
              id: 2895,
              value: "嘉鱼县"
            },
            {
              id: 2896,
              value: "崇阳县"
            },
            {
              id: 2897,
              value: "赤壁市"
            },
            {
              id: 2898,
              value: "通城县"
            },
            {
              id: 2899,
              value: "通山县"
            }
          ]
        },
        {
          id: 269,
          value: "随州市",
          area: [{
              id: 2900,
              value: "广水市"
            },
            {
              id: 2901,
              value: "曾都区"
            }
          ]
        },
        {
          id: 270,
          value: "恩施土家族苗族",
          area: [{
              id: 2902,
              value: "利川市"
            },
            {
              id: 2903,
              value: "咸丰县"
            },
            {
              id: 2904,
              value: "宣恩县"
            },
            {
              id: 2905,
              value: "巴东县"
            },
            {
              id: 2906,
              value: "建始县"
            },
            {
              id: 2907,
              value: "恩施市"
            },
            {
              id: 2908,
              value: "来凤县"
            },
            {
              id: 2909,
              value: "鹤峰县"
            }
          ]
        },
        {
          id: 271,
          value: "仙桃市",
          area: [{
            id: 2910,
            value: "仙桃市"
          }]
        },
        {
          id: 272,
          value: "潜江市",
          area: [{
            id: 2911,
            value: "潜江市"
          }]
        },
        {
          id: 273,
          value: "天门市",
          area: [{
            id: 2912,
            value: "天门市"
          }]
        },
        {
          id: 274,
          value: "神农架林区",
          area: [{
            id: 2913,
            value: "神农架林区"
          }]
        }
      ]
    },
    {
      id: 18,
      value: "湖南",
      city: [{
          id: 275,
          value: "长沙市",
          area: [{
              id: 2914,
              value: "天心区"
            },
            {
              id: 2915,
              value: "宁乡县"
            },
            {
              id: 2916,
              value: "岳麓区"
            },
            {
              id: 2917,
              value: "开福区"
            },
            {
              id: 2918,
              value: "望城县"
            },
            {
              id: 2919,
              value: "浏阳市"
            },
            {
              id: 2920,
              value: "芙蓉区"
            },
            {
              id: 2921,
              value: "长沙县"
            },
            {
              id: 2922,
              value: "雨花区"
            }
          ]
        },
        {
          id: 276,
          value: "株洲市",
          area: [{
              id: 2923,
              value: "天元区"
            },
            {
              id: 2924,
              value: "攸县"
            },
            {
              id: 2925,
              value: "株洲县"
            },
            {
              id: 2926,
              value: "炎陵县"
            },
            {
              id: 2927,
              value: "石峰区"
            },
            {
              id: 2928,
              value: "芦淞区"
            },
            {
              id: 2929,
              value: "茶陵县"
            },
            {
              id: 2930,
              value: "荷塘区"
            },
            {
              id: 2931,
              value: "醴陵市"
            }
          ]
        },
        {
          id: 277,
          value: "湘潭市",
          area: [{
              id: 2932,
              value: "岳塘区"
            },
            {
              id: 2933,
              value: "湘乡市"
            },
            {
              id: 2934,
              value: "湘潭县"
            },
            {
              id: 2935,
              value: "雨湖区"
            },
            {
              id: 2936,
              value: "韶山市"
            }
          ]
        },
        {
          id: 278,
          value: "衡阳市",
          area: [{
              id: 2937,
              value: "南岳区"
            },
            {
              id: 2938,
              value: "常宁市"
            },
            {
              id: 2939,
              value: "珠晖区"
            },
            {
              id: 2940,
              value: "石鼓区"
            },
            {
              id: 2941,
              value: "祁东县"
            },
            {
              id: 2942,
              value: "耒阳市"
            },
            {
              id: 2943,
              value: "蒸湘区"
            },
            {
              id: 2944,
              value: "衡东县"
            },
            {
              id: 2945,
              value: "衡南县"
            },
            {
              id: 2946,
              value: "衡山县"
            },
            {
              id: 2947,
              value: "衡阳县"
            },
            {
              id: 2948,
              value: "雁峰区"
            }
          ]
        },
        {
          id: 279,
          value: "邵阳市",
          area: [{
              id: 2949,
              value: "北塔区"
            },
            {
              id: 2950,
              value: "双清区"
            },
            {
              id: 2951,
              value: "城步苗族自治县"
            },
            {
              id: 2952,
              value: "大祥区"
            },
            {
              id: 2953,
              value: "新宁县"
            },
            {
              id: 2954,
              value: "新邵县"
            },
            {
              id: 2955,
              value: "武冈市"
            },
            {
              id: 2956,
              value: "洞口县"
            },
            {
              id: 2957,
              value: "绥宁县"
            },
            {
              id: 2958,
              value: "邵东县"
            },
            {
              id: 2959,
              value: "邵阳县"
            },
            {
              id: 2960,
              value: "隆回县"
            }
          ]
        },
        {
          id: 280,
          value: "岳阳市",
          area: [{
              id: 2961,
              value: "临湘市"
            },
            {
              id: 2962,
              value: "云溪区"
            },
            {
              id: 2963,
              value: "华容县"
            },
            {
              id: 2964,
              value: "君山区"
            },
            {
              id: 2965,
              value: "岳阳县"
            },
            {
              id: 2966,
              value: "岳阳楼区"
            },
            {
              id: 2967,
              value: "平江县"
            },
            {
              id: 2968,
              value: "汨罗市"
            },
            {
              id: 2969,
              value: "湘阴县"
            }
          ]
        },
        {
          id: 281,
          value: "常德市",
          area: [{
              id: 2970,
              value: "临澧县"
            },
            {
              id: 2971,
              value: "安乡县"
            },
            {
              id: 2972,
              value: "桃源县"
            },
            {
              id: 2973,
              value: "武陵区"
            },
            {
              id: 2974,
              value: "汉寿县"
            },
            {
              id: 2975,
              value: "津市市"
            },
            {
              id: 2976,
              value: "澧县"
            },
            {
              id: 2977,
              value: "石门县"
            },
            {
              id: 2978,
              value: "鼎城区"
            }
          ]
        },
        {
          id: 282,
          value: "张家界市",
          area: [{
              id: 2979,
              value: "慈利县"
            },
            {
              id: 2980,
              value: "桑植县"
            },
            {
              id: 2981,
              value: "武陵源区"
            },
            {
              id: 2982,
              value: "永定区"
            }
          ]
        },
        {
          id: 283,
          value: "益阳市",
          area: [{
              id: 2983,
              value: "南县"
            },
            {
              id: 2984,
              value: "安化县"
            },
            {
              id: 2985,
              value: "桃江县"
            },
            {
              id: 2986,
              value: "沅江市"
            },
            {
              id: 2987,
              value: "资阳区"
            },
            {
              id: 2988,
              value: "赫山区"
            }
          ]
        },
        {
          id: 284,
          value: "郴州市",
          area: [{
              id: 2989,
              value: "临武县"
            },
            {
              id: 2990,
              value: "北湖区"
            },
            {
              id: 2991,
              value: "嘉禾县"
            },
            {
              id: 2992,
              value: "安仁县"
            },
            {
              id: 2993,
              value: "宜章县"
            },
            {
              id: 2994,
              value: "桂东县"
            },
            {
              id: 2995,
              value: "桂阳县"
            },
            {
              id: 2996,
              value: "永兴县"
            },
            {
              id: 2997,
              value: "汝城县"
            },
            {
              id: 2998,
              value: "苏仙区"
            },
            {
              id: 2999,
              value: "资兴市"
            }
          ]
        },
        {
          id: 285,
          value: "永州市",
          area: [{
              id: 3000,
              value: "东安县"
            },
            {
              id: 3001,
              value: "冷水滩区"
            },
            {
              id: 3002,
              value: "双牌县"
            },
            {
              id: 3003,
              value: "宁远县"
            },
            {
              id: 3004,
              value: "新田县"
            },
            {
              id: 3005,
              value: "江华瑶族自治县"
            },
            {
              id: 3006,
              value: "江永县"
            },
            {
              id: 3007,
              value: "祁阳县"
            },
            {
              id: 3008,
              value: "蓝山县"
            },
            {
              id: 3009,
              value: "道县"
            },
            {
              id: 3010,
              value: "零陵区"
            }
          ]
        },
        {
          id: 286,
          value: "怀化市",
          area: [{
              id: 3011,
              value: "中方县"
            },
            {
              id: 3012,
              value: "会同县"
            },
            {
              id: 3013,
              value: "新晃侗族自治县"
            },
            {
              id: 3014,
              value: "沅陵县"
            },
            {
              id: 3015,
              value: "洪江市/洪江区"
            },
            {
              id: 3016,
              value: "溆浦县"
            },
            {
              id: 3017,
              value: "芷江侗族自治县"
            },
            {
              id: 3018,
              value: "辰溪县"
            },
            {
              id: 3019,
              value: "通道侗族自治县"
            },
            {
              id: 3020,
              value: "靖州苗族侗族自治县"
            },
            {
              id: 3021,
              value: "鹤城区"
            },
            {
              id: 3022,
              value: "麻阳苗族自治县"
            }
          ]
        },
        {
          id: 287,
          value: "娄底市",
          area: [{
              id: 3023,
              value: "冷水江市"
            },
            {
              id: 3024,
              value: "双峰县"
            },
            {
              id: 3025,
              value: "娄星区"
            },
            {
              id: 3026,
              value: "新化县"
            },
            {
              id: 3027,
              value: "涟源市"
            }
          ]
        },
        {
          id: 288,
          value: "湘西土家族苗族自治州",
          area: [{
              id: 3028,
              value: "保靖县"
            },
            {
              id: 3029,
              value: "凤凰县"
            },
            {
              id: 3030,
              value: "古丈县"
            },
            {
              id: 3031,
              value: "吉首市"
            },
            {
              id: 3032,
              value: "永顺县"
            },
            {
              id: 3033,
              value: "泸溪县"
            },
            {
              id: 3034,
              value: "花垣县"
            },
            {
              id: 3035,
              value: "龙山县"
            }
          ]
        }
      ]
    },
    {
      id: 19,
      value: "广东",
      city: [{
          id: 289,
          value: "广州市",
          area: [{
              id: 3036,
              value: "萝岗区"
            },
            {
              id: 3037,
              value: "南沙区"
            },
            {
              id: 3038,
              value: "从化市"
            },
            {
              id: 3039,
              value: "增城市"
            },
            {
              id: 3040,
              value: "天河区"
            },
            {
              id: 3041,
              value: "海珠区"
            },
            {
              id: 3042,
              value: "番禺区"
            },
            {
              id: 3043,
              value: "白云区"
            },
            {
              id: 3044,
              value: "花都区"
            },
            {
              id: 3045,
              value: "荔湾区"
            },
            {
              id: 3046,
              value: "越秀区"
            },
            {
              id: 3047,
              value: "黄埔区"
            }
          ]
        },
        {
          id: 290,
          value: "韶关市",
          area: [{
              id: 3048,
              value: "乐昌市"
            },
            {
              id: 3049,
              value: "乳源瑶族自治县"
            },
            {
              id: 3050,
              value: "仁化县"
            },
            {
              id: 3051,
              value: "南雄市"
            },
            {
              id: 3052,
              value: "始兴县"
            },
            {
              id: 3053,
              value: "新丰县"
            },
            {
              id: 3054,
              value: "曲江区"
            },
            {
              id: 3055,
              value: "武江区"
            },
            {
              id: 3056,
              value: "浈江区"
            },
            {
              id: 3057,
              value: "翁源县"
            }
          ]
        },
        {
          id: 291,
          value: "深圳市",
          area: [{
              id: 3058,
              value: "南山区"
            },
            {
              id: 3059,
              value: "宝安区"
            },
            {
              id: 3060,
              value: "盐田区"
            },
            {
              id: 3061,
              value: "福田区"
            },
            {
              id: 3062,
              value: "罗湖区"
            },
            {
              id: 3063,
              value: "龙岗区"
            }
          ]
        },
        {
          id: 292,
          value: "珠海市",
          area: [{
              id: 3064,
              value: "斗门区"
            },
            {
              id: 3065,
              value: "金湾区"
            },
            {
              id: 3066,
              value: "香洲区"
            }
          ]
        },
        {
          id: 293,
          value: "汕头市",
          area: [{
              id: 3067,
              value: "南澳县"
            },
            {
              id: 3068,
              value: "潮南区"
            },
            {
              id: 3069,
              value: "潮阳区"
            },
            {
              id: 3070,
              value: "澄海区"
            },
            {
              id: 3071,
              value: "濠江区"
            },
            {
              id: 3072,
              value: "金平区"
            },
            {
              id: 3073,
              value: "龙湖区"
            }
          ]
        },
        {
          id: 294,
          value: "佛山市",
          area: [{
              id: 3074,
              value: "三水区"
            },
            {
              id: 3075,
              value: "南海区"
            },
            {
              id: 3076,
              value: "禅城区"
            },
            {
              id: 3077,
              value: "顺德区"
            },
            {
              id: 3078,
              value: "高明区"
            }
          ]
        },
        {
          id: 295,
          value: "江门市",
          area: [{
              id: 3079,
              value: "台山市"
            },
            {
              id: 3080,
              value: "开平市"
            },
            {
              id: 3081,
              value: "恩平市"
            },
            {
              id: 3082,
              value: "新会区"
            },
            {
              id: 3083,
              value: "江海区"
            },
            {
              id: 3084,
              value: "蓬江区"
            },
            {
              id: 3085,
              value: "鹤山市"
            }
          ]
        },
        {
          id: 296,
          value: "湛江市",
          area: [{
              id: 3086,
              value: "吴川市"
            },
            {
              id: 3087,
              value: "坡头区"
            },
            {
              id: 3088,
              value: "廉江市"
            },
            {
              id: 3089,
              value: "徐闻县"
            },
            {
              id: 3090,
              value: "赤坎区"
            },
            {
              id: 3091,
              value: "遂溪县"
            },
            {
              id: 3092,
              value: "雷州市"
            },
            {
              id: 3093,
              value: "霞山区"
            },
            {
              id: 3094,
              value: "麻章区"
            }
          ]
        },
        {
          id: 297,
          value: "茂名市",
          area: [{
              id: 3095,
              value: "信宜市"
            },
            {
              id: 3096,
              value: "化州市"
            },
            {
              id: 3097,
              value: "电白县"
            },
            {
              id: 3098,
              value: "茂南区"
            },
            {
              id: 3099,
              value: "茂港区"
            },
            {
              id: 3100,
              value: "高州市"
            }
          ]
        },
        {
          id: 298,
          value: "肇庆市",
          area: [{
              id: 3101,
              value: "四会市"
            },
            {
              id: 3102,
              value: "封开县"
            },
            {
              id: 3103,
              value: "广宁县"
            },
            {
              id: 3104,
              value: "德庆县"
            },
            {
              id: 3105,
              value: "怀集县"
            },
            {
              id: 3106,
              value: "端州区"
            },
            {
              id: 3107,
              value: "高要市"
            },
            {
              id: 3108,
              value: "鼎湖区"
            }
          ]
        },
        {
          id: 299,
          value: "惠州市",
          area: [{
              id: 3109,
              value: "博罗县"
            },
            {
              id: 3110,
              value: "惠东县"
            },
            {
              id: 3111,
              value: "惠城区"
            },
            {
              id: 3112,
              value: "惠阳区"
            },
            {
              id: 3113,
              value: "龙门县"
            }
          ]
        },
        {
          id: 300,
          value: "梅州市",
          area: [{
              id: 3114,
              value: "丰顺县"
            },
            {
              id: 3115,
              value: "五华县"
            },
            {
              id: 3116,
              value: "兴宁市"
            },
            {
              id: 3117,
              value: "大埔县"
            },
            {
              id: 3118,
              value: "平远县"
            },
            {
              id: 3119,
              value: "梅县"
            },
            {
              id: 3120,
              value: "梅江区"
            },
            {
              id: 3121,
              value: "蕉岭县"
            }
          ]
        },
        {
          id: 301,
          value: "汕尾市",
          area: [{
              id: 3122,
              value: "城区"
            },
            {
              id: 3123,
              value: "海丰县"
            },
            {
              id: 3124,
              value: "陆丰市"
            },
            {
              id: 3125,
              value: "陆河县"
            }
          ]
        },
        {
          id: 302,
          value: "河源市",
          area: [{
              id: 3126,
              value: "东源县"
            },
            {
              id: 3127,
              value: "和平县"
            },
            {
              id: 3128,
              value: "源城区"
            },
            {
              id: 3129,
              value: "紫金县"
            },
            {
              id: 3130,
              value: "连平县"
            },
            {
              id: 3131,
              value: "龙川县"
            }
          ]
        },
        {
          id: 303,
          value: "阳江市",
          area: [{
              id: 3132,
              value: "江城区"
            },
            {
              id: 3133,
              value: "阳东县"
            },
            {
              id: 3134,
              value: "阳春市"
            },
            {
              id: 3135,
              value: "阳西县"
            }
          ]
        },
        {
          id: 304,
          value: "清远市",
          area: [{
              id: 3136,
              value: "佛冈县"
            },
            {
              id: 3137,
              value: "清城区"
            },
            {
              id: 3138,
              value: "清新县"
            },
            {
              id: 3139,
              value: "英德市"
            },
            {
              id: 3140,
              value: "连南瑶族自治县"
            },
            {
              id: 3141,
              value: "连山壮族瑶族自治县"
            },
            {
              id: 3142,
              value: "连州市"
            },
            {
              id: 3143,
              value: "阳山县"
            }
          ]
        },
        {
          id: 305,
          value: "东莞市",
          area: [{
            id: 3144,
            value: "东莞市"
          }]
        },
        {
          id: 306,
          value: "中山市",
          area: [{
            id: 3145,
            value: "中山市"
          }]
        },
        {
          id: 307,
          value: "潮州市",
          area: [{
              id: 3146,
              value: "湘桥区"
            },
            {
              id: 3147,
              value: "潮安县"
            },
            {
              id: 3148,
              value: "饶平县"
            }
          ]
        },
        {
          id: 308,
          value: "揭阳市",
          area: [{
              id: 3149,
              value: "惠来县"
            },
            {
              id: 3150,
              value: "揭东县"
            },
            {
              id: 3151,
              value: "揭西县"
            },
            {
              id: 3152,
              value: "普宁市"
            },
            {
              id: 3153,
              value: "榕城区"
            }
          ]
        },
        {
          id: 309,
          value: "云浮市",
          area: [{
              id: 3154,
              value: "云城区"
            },
            {
              id: 3155,
              value: "云安县"
            },
            {
              id: 3156,
              value: "新兴县"
            },
            {
              id: 3157,
              value: "罗定市"
            },
            {
              id: 3158,
              value: "郁南县"
            }
          ]
        }
      ]
    },
    {
      id: 20,
      value: "广西",
      city: [{
          id: 310,
          value: "南宁市",
          area: [{
              id: 3159,
              value: "上林县"
            },
            {
              id: 3160,
              value: "兴宁区"
            },
            {
              id: 3161,
              value: "宾阳县"
            },
            {
              id: 3162,
              value: "横县"
            },
            {
              id: 3163,
              value: "武鸣县"
            },
            {
              id: 3164,
              value: "江南区"
            },
            {
              id: 3165,
              value: "良庆区"
            },
            {
              id: 3166,
              value: "西乡塘区"
            },
            {
              id: 3167,
              value: "邕宁区"
            },
            {
              id: 3168,
              value: "隆安县"
            },
            {
              id: 3169,
              value: "青秀区"
            },
            {
              id: 3170,
              value: "马山县"
            }
          ]
        },
        {
          id: 311,
          value: "柳州市",
          area: [{
              id: 3171,
              value: "三江侗族自治县"
            },
            {
              id: 3172,
              value: "城中区"
            },
            {
              id: 3173,
              value: "柳北区"
            },
            {
              id: 3174,
              value: "柳南区"
            },
            {
              id: 3175,
              value: "柳城县"
            },
            {
              id: 3176,
              value: "柳江县"
            },
            {
              id: 3177,
              value: "融安县"
            },
            {
              id: 3178,
              value: "融水苗族自治县"
            },
            {
              id: 3179,
              value: "鱼峰区"
            },
            {
              id: 3180,
              value: "鹿寨县"
            }
          ]
        },
        {
          id: 312,
          value: "桂林市",
          area: [{
              id: 3181,
              value: "七星区"
            },
            {
              id: 3182,
              value: "临桂县"
            },
            {
              id: 3183,
              value: "全州县"
            },
            {
              id: 3184,
              value: "兴安县"
            },
            {
              id: 3185,
              value: "叠彩区"
            },
            {
              id: 3186,
              value: "平乐县"
            },
            {
              id: 3187,
              value: "恭城瑶族自治县"
            },
            {
              id: 3188,
              value: "永福县"
            },
            {
              id: 3189,
              value: "灌阳县"
            },
            {
              id: 3190,
              value: "灵川县"
            },
            {
              id: 3191,
              value: "秀峰区"
            },
            {
              id: 3192,
              value: "荔浦县"
            },
            {
              id: 3193,
              value: "象山区"
            },
            {
              id: 3194,
              value: "资源县"
            },
            {
              id: 3195,
              value: "阳朔县"
            },
            {
              id: 3196,
              value: "雁山区"
            },
            {
              id: 3197,
              value: "龙胜各族自治县"
            }
          ]
        },
        {
          id: 313,
          value: "梧州市",
          area: [{
              id: 3198,
              value: "万秀区"
            },
            {
              id: 3199,
              value: "岑溪市"
            },
            {
              id: 3200,
              value: "苍梧县"
            },
            {
              id: 3201,
              value: "蒙山县"
            },
            {
              id: 3202,
              value: "藤县"
            },
            {
              id: 3203,
              value: "蝶山区"
            },
            {
              id: 3204,
              value: "长洲区"
            }
          ]
        },
        {
          id: 314,
          value: "北海市",
          area: [{
              id: 3205,
              value: "合浦县"
            },
            {
              id: 3206,
              value: "海城区"
            },
            {
              id: 3207,
              value: "铁山港区"
            },
            {
              id: 3208,
              value: "银海区"
            }
          ]
        },
        {
          id: 315,
          value: "防城港市",
          area: [{
              id: 3209,
              value: "上思县"
            },
            {
              id: 3210,
              value: "东兴市"
            },
            {
              id: 3211,
              value: "港口区"
            },
            {
              id: 3212,
              value: "防城区"
            }
          ]
        },
        {
          id: 316,
          value: "钦州市",
          area: [{
              id: 3213,
              value: "浦北县"
            },
            {
              id: 3214,
              value: "灵山县"
            },
            {
              id: 3215,
              value: "钦北区"
            },
            {
              id: 3216,
              value: "钦南区"
            }
          ]
        },
        {
          id: 317,
          value: "贵港市",
          area: [{
              id: 3217,
              value: "平南县"
            },
            {
              id: 3218,
              value: "桂平市"
            },
            {
              id: 3219,
              value: "港北区"
            },
            {
              id: 3220,
              value: "港南区"
            },
            {
              id: 3221,
              value: "覃塘区"
            }
          ]
        },
        {
          id: 318,
          value: "玉林市",
          area: [{
              id: 3222,
              value: "兴业县"
            },
            {
              id: 3223,
              value: "北流市"
            },
            {
              id: 3224,
              value: "博白县"
            },
            {
              id: 3225,
              value: "容县"
            },
            {
              id: 3226,
              value: "玉州区"
            },
            {
              id: 3227,
              value: "陆川县"
            }
          ]
        },
        {
          id: 319,
          value: "百色市",
          area: [{
              id: 3228,
              value: "乐业县"
            },
            {
              id: 3229,
              value: "凌云县"
            },
            {
              id: 3230,
              value: "右江区"
            },
            {
              id: 3231,
              value: "平果县"
            },
            {
              id: 3232,
              value: "德保县"
            },
            {
              id: 3233,
              value: "田东县"
            },
            {
              id: 3234,
              value: "田林县"
            },
            {
              id: 3235,
              value: "田阳县"
            },
            {
              id: 3236,
              value: "西林县"
            },
            {
              id: 3237,
              value: "那坡县"
            },
            {
              id: 3238,
              value: "隆林各族自治县"
            },
            {
              id: 3239,
              value: "靖西县"
            }
          ]
        },
        {
          id: 320,
          value: "贺州市",
          area: [{
              id: 3240,
              value: "八步区"
            },
            {
              id: 3241,
              value: "富川瑶族自治县"
            },
            {
              id: 3242,
              value: "昭平县"
            },
            {
              id: 3243,
              value: "钟山县"
            }
          ]
        },
        {
          id: 321,
          value: "河池市",
          area: [{
              id: 3244,
              value: "东兰县"
            },
            {
              id: 3245,
              value: "凤山县"
            },
            {
              id: 3246,
              value: "南丹县"
            },
            {
              id: 3247,
              value: "大化瑶族自治县"
            },
            {
              id: 3248,
              value: "天峨县"
            },
            {
              id: 3249,
              value: "宜州市"
            },
            {
              id: 3250,
              value: "巴马瑶族自治县"
            },
            {
              id: 3251,
              value: "环江毛南族自治县"
            },
            {
              id: 3252,
              value: "罗城仫佬族自治县"
            },
            {
              id: 3253,
              value: "都安瑶族自治县"
            },
            {
              id: 3254,
              value: "金城江区"
            }
          ]
        },
        {
          id: 322,
          value: "来宾市",
          area: [{
              id: 3255,
              value: "兴宾区"
            },
            {
              id: 3256,
              value: "合山市"
            },
            {
              id: 3257,
              value: "忻城县"
            },
            {
              id: 3258,
              value: "武宣县"
            },
            {
              id: 3259,
              value: "象州县"
            },
            {
              id: 3260,
              value: "金秀瑶族自治县"
            }
          ]
        },
        {
          id: 323,
          value: "崇左市",
          area: [{
              id: 3261,
              value: "凭祥市"
            },
            {
              id: 3262,
              value: "大新县"
            },
            {
              id: 3263,
              value: "天等县"
            },
            {
              id: 3264,
              value: "宁明县"
            },
            {
              id: 3265,
              value: "扶绥县"
            },
            {
              id: 3266,
              value: "江州区"
            },
            {
              id: 3267,
              value: "龙州县"
            }
          ]
        }
      ]
    },
    {
      id: 21,
      value: "海南",
      city: [{
          id: 324,
          value: "海口市",
          area: [{
              id: 3268,
              value: "琼山区"
            },
            {
              id: 3269,
              value: "秀英区"
            },
            {
              id: 3270,
              value: "美兰区"
            },
            {
              id: 3271,
              value: "龙华区"
            }
          ]
        },
        {
          id: 325,
          value: "三亚市",
          area: [{
            id: 3272,
            value: "三亚市"
          }]
        },
        {
          id: 326,
          value: "五指山市",
          area: [{
            id: 3273,
            value: "五指山市"
          }]
        },
        {
          id: 327,
          value: "琼海市",
          area: [{
            id: 3274,
            value: "琼海市"
          }]
        },
        {
          id: 328,
          value: "儋州市",
          area: [{
            id: 3275,
            value: "儋州市"
          }]
        },
        {
          id: 329,
          value: "文昌市",
          area: [{
            id: 3276,
            value: "文昌市"
          }]
        },
        {
          id: 330,
          value: "万宁市",
          area: [{
            id: 3277,
            value: "万宁市"
          }]
        },
        {
          id: 331,
          value: "东方市",
          area: [{
            id: 3278,
            value: "东方市"
          }]
        },
        {
          id: 332,
          value: "定安县",
          area: [{
            id: 3279,
            value: "定安县"
          }]
        },
        {
          id: 333,
          value: "屯昌县",
          area: [{
            id: 3280,
            value: "屯昌县"
          }]
        },
        {
          id: 334,
          value: "澄迈县",
          area: [{
            id: 3281,
            value: "澄迈县"
          }]
        },
        {
          id: 335,
          value: "临高县",
          area: [{
            id: 3282,
            value: "临高县"
          }]
        },
        {
          id: 336,
          value: "白沙黎族自治县",
          area: [{
            id: 3283,
            value: "白沙黎族自治县"
          }]
        },
        {
          id: 337,
          value: "昌江黎族自治县",
          area: [{
            id: 3284,
            value: "昌江黎族自治县"
          }]
        },
        {
          id: 338,
          value: "乐东黎族自治县",
          area: [{
            id: 3285,
            value: "乐东黎族自治县"
          }]
        },
        {
          id: 339,
          value: "陵水黎族自治县",
          area: [{
            id: 3286,
            value: "陵水黎族自治县"
          }]
        },
        {
          id: 340,
          value: "保亭黎族苗族自治县",
          area: [{
            id: 3287,
            value: "保亭黎族苗族自治县"
          }]
        },
        {
          id: 341,
          value: "琼中黎族苗族自治县",
          area: [{
            id: 3288,
            value: "琼中黎族苗族自治县"
          }]
        },
        {
          id: 342,
          value: "西沙群岛",
          area: [

          ]
        },
        {
          id: 343,
          value: "南沙群岛",
          area: [

          ]
        },
        {
          id: 344,
          value: "中沙群岛的岛礁及其海域",
          area: [

          ]
        }
      ]
    },
    {
      id: 22,
      value: "重庆",
      city: [{
        id: 22,
        value: "重庆",
        area: [{
            id: 345,
            value: "万州区"
          },
          {
            id: 346,
            value: "涪陵区"
          },
          {
            id: 347,
            value: "渝中区"
          },
          {
            id: 348,
            value: "大渡口区"
          },
          {
            id: 349,
            value: "江北区"
          },
          {
            id: 350,
            value: "沙坪坝区"
          },
          {
            id: 351,
            value: "九龙坡区"
          },
          {
            id: 352,
            value: "南岸区"
          },
          {
            id: 353,
            value: "北碚区"
          },
          {
            id: 354,
            value: "双桥区"
          },
          {
            id: 355,
            value: "万盛区"
          },
          {
            id: 356,
            value: "渝北区"
          },
          {
            id: 357,
            value: "巴南区"
          },
          {
            id: 358,
            value: "黔江区"
          },
          {
            id: 359,
            value: "长寿区"
          },
          {
            id: 360,
            value: "綦江县"
          },
          {
            id: 361,
            value: "潼南县"
          },
          {
            id: 362,
            value: "铜梁县"
          },
          {
            id: 363,
            value: "大足县"
          },
          {
            id: 364,
            value: "荣昌县"
          },
          {
            id: 365,
            value: "璧山县"
          },
          {
            id: 366,
            value: "梁平县"
          },
          {
            id: 367,
            value: "城口县"
          },
          {
            id: 368,
            value: "丰都县"
          },
          {
            id: 369,
            value: "垫江县"
          },
          {
            id: 370,
            value: "武隆县"
          },
          {
            id: 371,
            value: "忠县"
          },
          {
            id: 372,
            value: "开县"
          },
          {
            id: 373,
            value: "云阳县"
          },
          {
            id: 374,
            value: "奉节县"
          },
          {
            id: 375,
            value: "巫山县"
          },
          {
            id: 376,
            value: "巫溪县"
          },
          {
            id: 377,
            value: "石柱土家族自治县"
          },
          {
            id: 378,
            value: "秀山土家族苗族自治县"
          },
          {
            id: 379,
            value: "酉阳土家族苗族自治县"
          },
          {
            id: 380,
            value: "彭水苗族土家族自治县"
          },
          {
            id: 381,
            value: "江津市"
          },
          {
            id: 382,
            value: "合川市"
          },
          {
            id: 383,
            value: "永川市"
          },
          {
            id: 384,
            value: "南川市"
          }
        ]
      }]
    },
    {
      id: 23,
      value: "四川",
      city: [{
          id: 385,
          value: "成都市",
          area: [{
              id: 4209,
              value: "双流县"
            },
            {
              id: 4210,
              value: "大邑县"
            },
            {
              id: 4211,
              value: "崇州市"
            },
            {
              id: 4212,
              value: "彭州市"
            },
            {
              id: 4213,
              value: "成华区"
            },
            {
              id: 4214,
              value: "新津县"
            },
            {
              id: 4215,
              value: "新都区"
            },
            {
              id: 4216,
              value: "武侯区"
            },
            {
              id: 4217,
              value: "温江区"
            },
            {
              id: 4218,
              value: "蒲江县"
            },
            {
              id: 4219,
              value: "邛崃市"
            },
            {
              id: 4220,
              value: "郫县"
            },
            {
              id: 4221,
              value: "都江堰市"
            },
            {
              id: 4222,
              value: "金堂县"
            },
            {
              id: 4223,
              value: "金牛区"
            },
            {
              id: 4224,
              value: "锦江区"
            },
            {
              id: 4225,
              value: "青白江区"
            },
            {
              id: 4226,
              value: "青羊区"
            },
            {
              id: 4227,
              value: "龙泉驿区"
            }
          ]
        },
        {
          id: 386,
          value: "自贡市",
          area: [{
              id: 4228,
              value: "大安区"
            },
            {
              id: 4229,
              value: "富顺县"
            },
            {
              id: 4230,
              value: "沿滩区"
            },
            {
              id: 4231,
              value: "自流井区"
            },
            {
              id: 4232,
              value: "荣县"
            },
            {
              id: 4233,
              value: "贡井区"
            }
          ]
        },
        {
          id: 387,
          value: "攀枝花市",
          area: [{
              id: 4234,
              value: "东区"
            },
            {
              id: 4235,
              value: "仁和区"
            },
            {
              id: 4236,
              value: "盐边县"
            },
            {
              id: 4237,
              value: "米易县"
            },
            {
              id: 4238,
              value: "西区"
            }
          ]
        },
        {
          id: 388,
          value: "泸州市",
          area: [{
              id: 4239,
              value: "叙永县"
            },
            {
              id: 4240,
              value: "古蔺县"
            },
            {
              id: 4241,
              value: "合江县"
            },
            {
              id: 4242,
              value: "江阳区"
            },
            {
              id: 4243,
              value: "泸县"
            },
            {
              id: 4244,
              value: "纳溪区"
            },
            {
              id: 4245,
              value: "龙马潭区"
            }
          ]
        },
        {
          id: 389,
          value: "德阳市",
          area: [{
              id: 4246,
              value: "中江县"
            },
            {
              id: 4247,
              value: "什邡市"
            },
            {
              id: 4248,
              value: "广汉市"
            },
            {
              id: 4249,
              value: "旌阳区"
            },
            {
              id: 4250,
              value: "绵竹市"
            },
            {
              id: 4251,
              value: "罗江县"
            }
          ]
        },
        {
          id: 390,
          value: "绵阳市",
          area: [{
              id: 4252,
              value: "三台县"
            },
            {
              id: 4253,
              value: "北川羌族自治县"
            },
            {
              id: 4254,
              value: "安县"
            },
            {
              id: 4255,
              value: "平武县"
            },
            {
              id: 4256,
              value: "梓潼县"
            },
            {
              id: 4257,
              value: "江油市"
            },
            {
              id: 4258,
              value: "涪城区"
            },
            {
              id: 4259,
              value: "游仙区"
            },
            {
              id: 4260,
              value: "盐亭县"
            }
          ]
        },
        {
          id: 391,
          value: "广元市",
          area: [{
              id: 4261,
              value: "元坝区"
            },
            {
              id: 4262,
              value: "利州区"
            },
            {
              id: 4263,
              value: "剑阁县"
            },
            {
              id: 4264,
              value: "旺苍县"
            },
            {
              id: 4265,
              value: "朝天区"
            },
            {
              id: 4266,
              value: "苍溪县"
            },
            {
              id: 4267,
              value: "青川县"
            }
          ]
        },
        {
          id: 392,
          value: "遂宁市",
          area: [{
              id: 4268,
              value: "大英县"
            },
            {
              id: 4269,
              value: "安居区"
            },
            {
              id: 4270,
              value: "射洪县"
            },
            {
              id: 4271,
              value: "船山区"
            },
            {
              id: 4272,
              value: "蓬溪县"
            }
          ]
        },
        {
          id: 393,
          value: "内江市",
          area: [{
              id: 4273,
              value: "东兴区"
            },
            {
              id: 4274,
              value: "威远县"
            },
            {
              id: 4275,
              value: "市中区"
            },
            {
              id: 4276,
              value: "资中县"
            },
            {
              id: 4277,
              value: "隆昌县"
            }
          ]
        },
        {
          id: 394,
          value: "乐山市",
          area: [{
              id: 4278,
              value: "五通桥区"
            },
            {
              id: 4279,
              value: "井研县"
            },
            {
              id: 4280,
              value: "夹江县"
            },
            {
              id: 4281,
              value: "峨眉山市"
            },
            {
              id: 4282,
              value: "峨边彝族自治县"
            },
            {
              id: 4283,
              value: "市中区"
            },
            {
              id: 4284,
              value: "沐川县"
            },
            {
              id: 4285,
              value: "沙湾区"
            },
            {
              id: 4286,
              value: "犍为县"
            },
            {
              id: 4287,
              value: "金口河区"
            },
            {
              id: 4288,
              value: "马边彝族自治县"
            }
          ]
        },
        {
          id: 395,
          value: "南充市",
          area: [{
              id: 4289,
              value: "仪陇县"
            },
            {
              id: 4290,
              value: "南充市嘉陵区"
            },
            {
              id: 4291,
              value: "南部县"
            },
            {
              id: 4292,
              value: "嘉陵区"
            },
            {
              id: 4293,
              value: "营山县"
            },
            {
              id: 4294,
              value: "蓬安县"
            },
            {
              id: 4295,
              value: "西充县"
            },
            {
              id: 4296,
              value: "阆中市"
            },
            {
              id: 4297,
              value: "顺庆区"
            },
            {
              id: 4298,
              value: "高坪区"
            }
          ]
        },
        {
          id: 396,
          value: "眉山市",
          area: [{
              id: 4299,
              value: "东坡区"
            },
            {
              id: 4300,
              value: "丹棱县"
            },
            {
              id: 4301,
              value: "仁寿县"
            },
            {
              id: 4302,
              value: "彭山县"
            },
            {
              id: 4303,
              value: "洪雅县"
            },
            {
              id: 4304,
              value: "青神县"
            }
          ]
        },
        {
          id: 397,
          value: "宜宾市",
          area: [{
              id: 4305,
              value: "兴文县"
            },
            {
              id: 4306,
              value: "南溪县"
            },
            {
              id: 4307,
              value: "宜宾县"
            },
            {
              id: 4308,
              value: "屏山县"
            },
            {
              id: 4309,
              value: "江安县"
            },
            {
              id: 4310,
              value: "珙县"
            },
            {
              id: 4311,
              value: "筠连县"
            },
            {
              id: 4312,
              value: "翠屏区"
            },
            {
              id: 4313,
              value: "长宁县"
            },
            {
              id: 4314,
              value: "高县"
            }
          ]
        },
        {
          id: 398,
          value: "广安市",
          area: [{
              id: 4315,
              value: "华蓥市"
            },
            {
              id: 4316,
              value: "岳池县"
            },
            {
              id: 4317,
              value: "广安区"
            },
            {
              id: 4318,
              value: "武胜县"
            },
            {
              id: 4319,
              value: "邻水县"
            }
          ]
        },
        {
          id: 399,
          value: "达州市",
          area: [{
              id: 4320,
              value: "万源市"
            },
            {
              id: 4321,
              value: "大竹县"
            },
            {
              id: 4322,
              value: "宣汉县"
            },
            {
              id: 4323,
              value: "开江县"
            },
            {
              id: 4324,
              value: "渠县"
            },
            {
              id: 4325,
              value: "达县"
            },
            {
              id: 4326,
              value: "通川区"
            }
          ]
        },
        {
          id: 400,
          value: "雅安市",
          area: [{
              id: 4327,
              value: "名山县"
            },
            {
              id: 4328,
              value: "天全县"
            },
            {
              id: 4329,
              value: "宝兴县"
            },
            {
              id: 4330,
              value: "汉源县"
            },
            {
              id: 4331,
              value: "石棉县"
            },
            {
              id: 4332,
              value: "芦山县"
            },
            {
              id: 4333,
              value: "荥经县"
            },
            {
              id: 4334,
              value: "雨城区"
            }
          ]
        },
        {
          id: 401,
          value: "巴中市",
          area: [{
              id: 4335,
              value: "南江县"
            },
            {
              id: 4336,
              value: "巴州区"
            },
            {
              id: 4337,
              value: "平昌县"
            },
            {
              id: 4338,
              value: "通江县"
            }
          ]
        },
        {
          id: 402,
          value: "资阳市",
          area: [{
              id: 4339,
              value: "乐至县"
            },
            {
              id: 4340,
              value: "安岳县"
            },
            {
              id: 4341,
              value: "简阳市"
            },
            {
              id: 4342,
              value: "雁江区"
            }
          ]
        },
        {
          id: 403,
          value: "阿坝藏族羌族自治州",
          area: [{
              id: 4343,
              value: "九寨沟县"
            },
            {
              id: 4344,
              value: "壤塘县"
            },
            {
              id: 4345,
              value: "小金县"
            },
            {
              id: 4346,
              value: "松潘县"
            },
            {
              id: 4347,
              value: "汶川县"
            },
            {
              id: 4348,
              value: "理县"
            },
            {
              id: 4349,
              value: "红原县"
            },
            {
              id: 4350,
              value: "若尔盖县"
            },
            {
              id: 4351,
              value: "茂县"
            },
            {
              id: 4352,
              value: "金川县"
            },
            {
              id: 4353,
              value: "阿坝县"
            },
            {
              id: 4354,
              value: "马尔康县"
            },
            {
              id: 4355,
              value: "黑水县"
            }
          ]
        },
        {
          id: 404,
          value: "甘孜藏族自治州",
          area: [{
              id: 4356,
              value: "丹巴县"
            },
            {
              id: 4357,
              value: "乡城县"
            },
            {
              id: 4358,
              value: "巴塘县"
            },
            {
              id: 4359,
              value: "康定县"
            },
            {
              id: 4360,
              value: "得荣县"
            },
            {
              id: 4361,
              value: "德格县"
            },
            {
              id: 4362,
              value: "新龙县"
            },
            {
              id: 4363,
              value: "泸定县"
            },
            {
              id: 4364,
              value: "炉霍县"
            },
            {
              id: 4365,
              value: "理塘县"
            },
            {
              id: 4366,
              value: "甘孜县"
            },
            {
              id: 4367,
              value: "白玉县"
            },
            {
              id: 4368,
              value: "石渠县"
            },
            {
              id: 4369,
              value: "稻城县"
            },
            {
              id: 4370,
              value: "色达县"
            },
            {
              id: 4371,
              value: "道孚县"
            },
            {
              id: 4372,
              value: "雅江县"
            }
          ]
        },
        {
          id: 405,
          value: "凉山彝族自治州",
          area: [{
              id: 4373,
              value: "会东县"
            },
            {
              id: 4374,
              value: "会理县"
            },
            {
              id: 4375,
              value: "冕宁县"
            },
            {
              id: 4376,
              value: "喜德县"
            },
            {
              id: 4377,
              value: "宁南县"
            },
            {
              id: 4378,
              value: "布拖县"
            },
            {
              id: 4379,
              value: "德昌县"
            },
            {
              id: 4380,
              value: "昭觉县"
            },
            {
              id: 4381,
              value: "普格县"
            },
            {
              id: 4382,
              value: "木里藏族自治县"
            },
            {
              id: 4383,
              value: "甘洛县"
            },
            {
              id: 4384,
              value: "盐源县"
            },
            {
              id: 4385,
              value: "美姑县"
            },
            {
              id: 4386,
              value: "西昌"
            },
            {
              id: 4387,
              value: "越西县"
            },
            {
              id: 4388,
              value: "金阳县"
            },
            {
              id: 4389,
              value: "雷波县"
            }
          ]
        }
      ]
    },
    {
      id: 24,
      value: "贵州",
      city: [{
          id: 406,
          value: "贵阳市",
          area: [{
              id: 4390,
              value: "乌当区"
            },
            {
              id: 4391,
              value: "云岩区"
            },
            {
              id: 4392,
              value: "修文县"
            },
            {
              id: 4393,
              value: "南明区"
            },
            {
              id: 4394,
              value: "小河区"
            },
            {
              id: 4395,
              value: "开阳县"
            },
            {
              id: 4396,
              value: "息烽县"
            },
            {
              id: 4397,
              value: "清镇市"
            },
            {
              id: 4398,
              value: "白云区"
            },
            {
              id: 4399,
              value: "花溪区"
            }
          ]
        },
        {
          id: 407,
          value: "六盘水市",
          area: [{
              id: 4400,
              value: "六枝特区"
            },
            {
              id: 4401,
              value: "水城县"
            },
            {
              id: 4402,
              value: "盘县"
            },
            {
              id: 4403,
              value: "钟山区"
            }
          ]
        },
        {
          id: 408,
          value: "遵义市",
          area: [{
              id: 4404,
              value: "习水县"
            },
            {
              id: 4405,
              value: "仁怀市"
            },
            {
              id: 4406,
              value: "余庆县"
            },
            {
              id: 4407,
              value: "凤冈县"
            },
            {
              id: 4408,
              value: "务川仡佬族苗族自治县"
            },
            {
              id: 4409,
              value: "桐梓县"
            },
            {
              id: 4410,
              value: "正安县"
            },
            {
              id: 4411,
              value: "汇川区"
            },
            {
              id: 4412,
              value: "湄潭县"
            },
            {
              id: 4413,
              value: "红花岗区"
            },
            {
              id: 4414,
              value: "绥阳县"
            },
            {
              id: 4415,
              value: "赤水市"
            },
            {
              id: 4416,
              value: "道真仡佬族苗族自治县"
            },
            {
              id: 4417,
              value: "遵义县"
            }
          ]
        },
        {
          id: 409,
          value: "安顺市",
          area: [{
              id: 4418,
              value: "关岭布依族苗族自治县"
            },
            {
              id: 4419,
              value: "平坝县"
            },
            {
              id: 4420,
              value: "普定县"
            },
            {
              id: 4421,
              value: "紫云苗族布依族自治县"
            },
            {
              id: 4422,
              value: "西秀区"
            },
            {
              id: 4423,
              value: "镇宁布依族苗族自治县"
            }
          ]
        },
        {
          id: 410,
          value: "铜仁地区",
          area: [{
              id: 4424,
              value: "万山特区"
            },
            {
              id: 4425,
              value: "印江土家族苗族自治县"
            },
            {
              id: 4426,
              value: "德江县"
            },
            {
              id: 4427,
              value: "思南县"
            },
            {
              id: 4428,
              value: "松桃苗族自治县"
            },
            {
              id: 4429,
              value: "江口县"
            },
            {
              id: 4430,
              value: "沿河土家族自治县"
            },
            {
              id: 4431,
              value: "玉屏侗族自治县"
            },
            {
              id: 4432,
              value: "石阡县"
            },
            {
              id: 4433,
              value: "铜仁市"
            }
          ]
        },
        {
          id: 411,
          value: "黔西南布依族苗族自治州",
          area: [{
              id: 4434,
              value: "兴义市"
            },
            {
              id: 4435,
              value: "兴仁县"
            },
            {
              id: 4436,
              value: "册亨县"
            },
            {
              id: 4437,
              value: "安龙县"
            },
            {
              id: 4438,
              value: "普安县"
            },
            {
              id: 4439,
              value: "晴隆县"
            },
            {
              id: 4440,
              value: "望谟县"
            },
            {
              id: 4441,
              value: "贞丰县"
            }
          ]
        },
        {
          id: 412,
          value: "毕节地区",
          area: [{
              id: 4442,
              value: "大方县"
            },
            {
              id: 4443,
              value: "威宁彝族回族苗族自治县"
            },
            {
              id: 4444,
              value: "毕节市"
            },
            {
              id: 4445,
              value: "纳雍县"
            },
            {
              id: 4446,
              value: "织金县"
            },
            {
              id: 4447,
              value: "赫章县"
            },
            {
              id: 4448,
              value: "金沙县"
            },
            {
              id: 4449,
              value: "黔西县"
            }
          ]
        },
        {
          id: 413,
          value: "黔东南苗族侗族自治州",
          area: [{
              id: 4450,
              value: "三穗县"
            },
            {
              id: 4451,
              value: "丹寨县"
            },
            {
              id: 4452,
              value: "从江县"
            },
            {
              id: 4453,
              value: "凯里市"
            },
            {
              id: 4454,
              value: "剑河县"
            },
            {
              id: 4455,
              value: "台江县"
            },
            {
              id: 4456,
              value: "天柱县"
            },
            {
              id: 4457,
              value: "岑巩县"
            },
            {
              id: 4458,
              value: "施秉县"
            },
            {
              id: 4459,
              value: "榕江县"
            },
            {
              id: 4460,
              value: "锦屏县"
            },
            {
              id: 4461,
              value: "镇远县"
            },
            {
              id: 4462,
              value: "雷山县"
            },
            {
              id: 4463,
              value: "麻江县"
            },
            {
              id: 4464,
              value: "黄平县"
            },
            {
              id: 4465,
              value: "黎平县"
            }
          ]
        },
        {
          id: 414,
          value: "黔南布依族苗族自治州",
          area: [{
              id: 4466,
              value: "三都水族自治县"
            },
            {
              id: 4467,
              value: "平塘县"
            },
            {
              id: 4468,
              value: "惠水县"
            },
            {
              id: 4469,
              value: "独山县"
            },
            {
              id: 4470,
              value: "瓮安县"
            },
            {
              id: 4471,
              value: "福泉市"
            },
            {
              id: 4472,
              value: "罗甸县"
            },
            {
              id: 4473,
              value: "荔波县"
            },
            {
              id: 4474,
              value: "贵定县"
            },
            {
              id: 4475,
              value: "都匀市"
            },
            {
              id: 4476,
              value: "长顺县"
            },
            {
              id: 4477,
              value: "龙里县"
            }
          ]
        }
      ]
    },
    {
      id: 25,
      value: "云南",
      city: [{
          id: 415,
          value: "昆明市",
          area: [{
              id: 4478,
              value: "东川区"
            },
            {
              id: 4479,
              value: "五华区"
            },
            {
              id: 4480,
              value: "呈贡县"
            },
            {
              id: 4481,
              value: "安宁市"
            },
            {
              id: 4482,
              value: "官渡区"
            },
            {
              id: 4483,
              value: "宜良县"
            },
            {
              id: 4484,
              value: "富民县"
            },
            {
              id: 4485,
              value: "寻甸回族彝族自治县"
            },
            {
              id: 4486,
              value: "嵩明县"
            },
            {
              id: 4487,
              value: "晋宁县"
            },
            {
              id: 4488,
              value: "盘龙区"
            },
            {
              id: 4489,
              value: "石林彝族自治县"
            },
            {
              id: 4490,
              value: "禄劝彝族苗族自治县"
            },
            {
              id: 4491,
              value: "西山区"
            }
          ]
        },
        {
          id: 416,
          value: "曲靖市",
          area: [{
              id: 4492,
              value: "会泽县"
            },
            {
              id: 4493,
              value: "宣威市"
            },
            {
              id: 4494,
              value: "富源县"
            },
            {
              id: 4495,
              value: "师宗县"
            },
            {
              id: 4496,
              value: "沾益县"
            },
            {
              id: 4497,
              value: "罗平县"
            },
            {
              id: 4498,
              value: "陆良县"
            },
            {
              id: 4499,
              value: "马龙县"
            },
            {
              id: 4500,
              value: "麒麟区"
            }
          ]
        },
        {
          id: 417,
          value: "玉溪市",
          area: [{
              id: 4501,
              value: "元江哈尼族彝族傣族自治县"
            },
            {
              id: 4502,
              value: "华宁县"
            },
            {
              id: 4503,
              value: "峨山彝族自治县"
            },
            {
              id: 4504,
              value: "新平彝族傣族自治县"
            },
            {
              id: 4505,
              value: "易门县"
            },
            {
              id: 4506,
              value: "江川县"
            },
            {
              id: 4507,
              value: "澄江县"
            },
            {
              id: 4508,
              value: "红塔区"
            },
            {
              id: 4509,
              value: "通海县"
            }
          ]
        },
        {
          id: 418,
          value: "保山市",
          area: [{
              id: 4510,
              value: "施甸县"
            },
            {
              id: 4511,
              value: "昌宁县"
            },
            {
              id: 4512,
              value: "腾冲县"
            },
            {
              id: 4513,
              value: "隆阳区"
            },
            {
              id: 4514,
              value: "龙陵县"
            }
          ]
        },
        {
          id: 419,
          value: "昭通市",
          area: [{
              id: 4515,
              value: "大关县"
            },
            {
              id: 4516,
              value: "威信县"
            },
            {
              id: 4517,
              value: "巧家县"
            },
            {
              id: 4518,
              value: "彝良县"
            },
            {
              id: 4519,
              value: "昭阳区"
            },
            {
              id: 4520,
              value: "水富县"
            },
            {
              id: 4521,
              value: "永善县"
            },
            {
              id: 4522,
              value: "盐津县"
            },
            {
              id: 4523,
              value: "绥江县"
            },
            {
              id: 4524,
              value: "镇雄县"
            },
            {
              id: 4525,
              value: "鲁甸县"
            }
          ]
        },
        {
          id: 420,
          value: "丽江市",
          area: [{
              id: 4526,
              value: "华坪县"
            },
            {
              id: 4527,
              value: "古城区"
            },
            {
              id: 4528,
              value: "宁蒗彝族自治县"
            },
            {
              id: 4529,
              value: "永胜县"
            },
            {
              id: 4530,
              value: "玉龙纳西族自治县"
            }
          ]
        },
        {
          id: 421,
          value: "思茅市",
          area: [

          ]
        },
        {
          id: 422,
          value: "临沧市",
          area: [{
              id: 4531,
              value: "临翔区"
            },
            {
              id: 4532,
              value: "云县"
            },
            {
              id: 4533,
              value: "凤庆县"
            },
            {
              id: 4534,
              value: "双江拉祜族佤族布朗族傣族自治县"
            },
            {
              id: 4535,
              value: "永德县"
            },
            {
              id: 4536,
              value: "沧源佤族自治县"
            },
            {
              id: 4537,
              value: "耿马傣族佤族自治县"
            },
            {
              id: 4538,
              value: "镇康县"
            }
          ]
        },
        {
          id: 423,
          value: "楚雄彝族自治州",
          area: [{
              id: 4539,
              value: "元谋县"
            },
            {
              id: 4540,
              value: "南华县"
            },
            {
              id: 4541,
              value: "双柏县"
            },
            {
              id: 4542,
              value: "大姚县"
            },
            {
              id: 4543,
              value: "姚安县"
            },
            {
              id: 4544,
              value: "楚雄市"
            },
            {
              id: 4545,
              value: "武定县"
            },
            {
              id: 4546,
              value: "永仁县"
            },
            {
              id: 4547,
              value: "牟定县"
            },
            {
              id: 4548,
              value: "禄丰县"
            }
          ]
        },
        {
          id: 424,
          value: "红河哈尼族彝族自治州",
          area: [{
              id: 4549,
              value: "个旧市"
            },
            {
              id: 4550,
              value: "元阳县"
            },
            {
              id: 4551,
              value: "屏边苗族自治县"
            },
            {
              id: 4552,
              value: "建水县"
            },
            {
              id: 4553,
              value: "开远市"
            },
            {
              id: 4554,
              value: "弥勒县"
            },
            {
              id: 4555,
              value: "河口瑶族自治县"
            },
            {
              id: 4556,
              value: "泸西县"
            },
            {
              id: 4557,
              value: "石屏县"
            },
            {
              id: 4558,
              value: "红河县"
            },
            {
              id: 4559,
              value: "绿春县"
            },
            {
              id: 4560,
              value: "蒙自县"
            },
            {
              id: 4561,
              value: "金平苗族瑶族傣族自治县"
            }
          ]
        },
        {
          id: 425,
          value: "文山壮族苗族自治州",
          area: [{
              id: 4562,
              value: "丘北县"
            },
            {
              id: 4563,
              value: "富宁县"
            },
            {
              id: 4564,
              value: "广南县"
            },
            {
              id: 4565,
              value: "文山县"
            },
            {
              id: 4566,
              value: "砚山县"
            },
            {
              id: 4567,
              value: "西畴县"
            },
            {
              id: 4568,
              value: "马关县"
            },
            {
              id: 4569,
              value: "麻栗坡县"
            }
          ]
        },
        {
          id: 426,
          value: "西双版纳傣族自治州",
          area: [{
              id: 4570,
              value: "勐海县"
            },
            {
              id: 4571,
              value: "勐腊县"
            },
            {
              id: 4572,
              value: "景洪市"
            }
          ]
        },
        {
          id: 427,
          value: "大理白族自治州",
          area: [{
              id: 4573,
              value: "云龙县"
            },
            {
              id: 4574,
              value: "剑川县"
            },
            {
              id: 4575,
              value: "南涧彝族自治县"
            },
            {
              id: 4576,
              value: "大理市"
            },
            {
              id: 4577,
              value: "宾川县"
            },
            {
              id: 4578,
              value: "巍山彝族回族自治县"
            },
            {
              id: 4579,
              value: "弥渡县"
            },
            {
              id: 4580,
              value: "永平县"
            },
            {
              id: 4581,
              value: "洱源县"
            },
            {
              id: 4582,
              value: "漾濞彝族自治县"
            },
            {
              id: 4583,
              value: "祥云县"
            },
            {
              id: 4584,
              value: "鹤庆县"
            }
          ]
        },
        {
          id: 428,
          value: "德宏傣族景颇族自治州",
          area: [{
              id: 4585,
              value: "梁河县"
            },
            {
              id: 4586,
              value: "潞西市"
            },
            {
              id: 4587,
              value: "瑞丽市"
            },
            {
              id: 4588,
              value: "盈江县"
            },
            {
              id: 4589,
              value: "陇川县"
            }
          ]
        },
        {
          id: 429,
          value: "怒江傈僳族自治州",
          area: [

          ]
        },
        {
          id: 430,
          value: "迪庆藏族自治州",
          area: [{
              id: 4590,
              value: "德钦县"
            },
            {
              id: 4591,
              value: "维西傈僳族自治县"
            },
            {
              id: 4592,
              value: "香格里拉县"
            }
          ]
        }
      ]
    },
    {
      id: 26,
      value: "西藏",
      city: [{
          id: 431,
          value: "拉萨市",
          area: [{
              id: 4593,
              value: "城关区"
            },
            {
              id: 4594,
              value: "堆龙德庆县"
            },
            {
              id: 4595,
              value: "墨竹工卡县"
            },
            {
              id: 4596,
              value: "尼木县"
            },
            {
              id: 4597,
              value: "当雄县"
            },
            {
              id: 4598,
              value: "曲水县"
            },
            {
              id: 4599,
              value: "林周县"
            },
            {
              id: 4600,
              value: "达孜县"
            }
          ]
        },
        {
          id: 432,
          value: "昌都地区",
          area: [{
              id: 4601,
              value: "丁青县"
            },
            {
              id: 4602,
              value: "八宿县"
            },
            {
              id: 4603,
              value: "察雅县"
            },
            {
              id: 4604,
              value: "左贡县"
            },
            {
              id: 4605,
              value: "昌都县"
            },
            {
              id: 4606,
              value: "江达县"
            },
            {
              id: 4607,
              value: "洛隆县"
            },
            {
              id: 4608,
              value: "类乌齐县"
            },
            {
              id: 4609,
              value: "芒康县"
            },
            {
              id: 4610,
              value: "贡觉县"
            },
            {
              id: 4611,
              value: "边坝县"
            }
          ]
        },
        {
          id: 433,
          value: "山南地区",
          area: [{
              id: 4612,
              value: "乃东县"
            },
            {
              id: 4613,
              value: "加查县"
            },
            {
              id: 4614,
              value: "扎囊县"
            },
            {
              id: 4615,
              value: "措美县"
            },
            {
              id: 4616,
              value: "曲松县"
            },
            {
              id: 4617,
              value: "桑日县"
            },
            {
              id: 4618,
              value: "洛扎县"
            },
            {
              id: 4619,
              value: "浪卡子县"
            },
            {
              id: 4620,
              value: "琼结县"
            },
            {
              id: 4621,
              value: "贡嘎县"
            },
            {
              id: 4622,
              value: "错那县"
            },
            {
              id: 4623,
              value: "隆子县"
            }
          ]
        },
        {
          id: 434,
          value: "日喀则地区",
          area: [{
              id: 4624,
              value: "亚东县"
            },
            {
              id: 4625,
              value: "仁布县"
            },
            {
              id: 4626,
              value: "仲巴县"
            },
            {
              id: 4627,
              value: "南木林县"
            },
            {
              id: 4628,
              value: "吉隆县"
            },
            {
              id: 4629,
              value: "定日县"
            },
            {
              id: 4630,
              value: "定结县"
            },
            {
              id: 4631,
              value: "岗巴县"
            },
            {
              id: 4632,
              value: "康马县"
            },
            {
              id: 4633,
              value: "拉孜县"
            },
            {
              id: 4634,
              value: "日喀则市"
            },
            {
              id: 4635,
              value: "昂仁县"
            },
            {
              id: 4636,
              value: "江孜县"
            },
            {
              id: 4637,
              value: "白朗县"
            },
            {
              id: 4638,
              value: "聂拉木县"
            },
            {
              id: 4639,
              value: "萨嘎县"
            },
            {
              id: 4640,
              value: "萨迦县"
            },
            {
              id: 4641,
              value: "谢通门县"
            }
          ]
        },
        {
          id: 435,
          value: "那曲地区",
          area: [{
              id: 4642,
              value: "嘉黎县"
            },
            {
              id: 4643,
              value: "安多县"
            },
            {
              id: 4644,
              value: "尼玛县"
            },
            {
              id: 4645,
              value: "巴青县"
            },
            {
              id: 4646,
              value: "比如县"
            },
            {
              id: 4647,
              value: "班戈县"
            },
            {
              id: 4648,
              value: "申扎县"
            },
            {
              id: 4649,
              value: "索县"
            },
            {
              id: 4650,
              value: "聂荣县"
            },
            {
              id: 4651,
              value: "那曲县"
            }
          ]
        },
        {
          id: 436,
          value: "阿里地区",
          area: [{
              id: 4652,
              value: "噶尔县"
            },
            {
              id: 4653,
              value: "措勤县"
            },
            {
              id: 4654,
              value: "改则县"
            },
            {
              id: 4655,
              value: "日土县"
            },
            {
              id: 4656,
              value: "普兰县"
            },
            {
              id: 4657,
              value: "札达县"
            },
            {
              id: 4658,
              value: "革吉县"
            }
          ]
        },
        {
          id: 437,
          value: "林芝地区",
          area: [{
              id: 4659,
              value: "墨脱县"
            },
            {
              id: 4660,
              value: "察隅县"
            },
            {
              id: 4661,
              value: "工布江达县"
            },
            {
              id: 4662,
              value: "朗县"
            },
            {
              id: 4663,
              value: "林芝县"
            },
            {
              id: 4664,
              value: "波密县"
            },
            {
              id: 4665,
              value: "米林县"
            }
          ]
        }
      ]
    },
    {
      id: 27,
      value: "陕西",
      city: [{
          id: 438,
          value: "西安市",
          area: [{
              id: 4666,
              value: "临潼区"
            },
            {
              id: 4667,
              value: "周至县"
            },
            {
              id: 4668,
              value: "户县"
            },
            {
              id: 4669,
              value: "新城区"
            },
            {
              id: 4670,
              value: "未央区"
            },
            {
              id: 4671,
              value: "灞桥区"
            },
            {
              id: 4672,
              value: "碑林区"
            },
            {
              id: 4673,
              value: "莲湖区"
            },
            {
              id: 4674,
              value: "蓝田县"
            },
            {
              id: 4675,
              value: "长安区"
            },
            {
              id: 4676,
              value: "阎良区"
            },
            {
              id: 4677,
              value: "雁塔区"
            },
            {
              id: 4678,
              value: "高陵县"
            }
          ]
        },
        {
          id: 439,
          value: "铜川市",
          area: [{
              id: 4679,
              value: "印台区"
            },
            {
              id: 4680,
              value: "宜君县"
            },
            {
              id: 4681,
              value: "王益区"
            },
            {
              id: 4682,
              value: "耀州区"
            }
          ]
        },
        {
          id: 440,
          value: "宝鸡市",
          area: [{
              id: 4683,
              value: "凤县"
            },
            {
              id: 4684,
              value: "凤翔县"
            },
            {
              id: 4685,
              value: "千阳县"
            },
            {
              id: 4686,
              value: "太白县"
            },
            {
              id: 4687,
              value: "岐山县"
            },
            {
              id: 4688,
              value: "扶风县"
            },
            {
              id: 4689,
              value: "渭滨区"
            },
            {
              id: 4690,
              value: "眉县"
            },
            {
              id: 4691,
              value: "金台区"
            },
            {
              id: 4692,
              value: "陇县"
            },
            {
              id: 4693,
              value: "陈仓区"
            },
            {
              id: 4694,
              value: "麟游县"
            }
          ]
        },
        {
          id: 441,
          value: "咸阳市",
          area: [{
              id: 4695,
              value: "三原县"
            },
            {
              id: 4696,
              value: "干县"
            },
            {
              id: 4697,
              value: "兴平市"
            },
            {
              id: 4698,
              value: "彬县"
            },
            {
              id: 4699,
              value: "旬邑县"
            },
            {
              id: 4700,
              value: "杨陵区"
            },
            {
              id: 4701,
              value: "武功县"
            },
            {
              id: 4702,
              value: "永寿县"
            },
            {
              id: 4703,
              value: "泾阳县"
            },
            {
              id: 4704,
              value: "淳化县"
            },
            {
              id: 4705,
              value: "渭城区"
            },
            {
              id: 4706,
              value: "礼泉县"
            },
            {
              id: 4707,
              value: "秦都区"
            },
            {
              id: 4708,
              value: "长武县"
            }
          ]
        },
        {
          id: 442,
          value: "渭南市",
          area: [{
              id: 4709,
              value: "临渭区"
            },
            {
              id: 4710,
              value: "华县"
            },
            {
              id: 4711,
              value: "华阴市"
            },
            {
              id: 4712,
              value: "合阳县"
            },
            {
              id: 4713,
              value: "大荔县"
            },
            {
              id: 4714,
              value: "富平县"
            },
            {
              id: 4715,
              value: "潼关县"
            },
            {
              id: 4716,
              value: "澄城县"
            },
            {
              id: 4717,
              value: "白水县"
            },
            {
              id: 4718,
              value: "蒲城县"
            },
            {
              id: 4719,
              value: "韩城市"
            }
          ]
        },
        {
          id: 443,
          value: "延安市",
          area: [{
              id: 4720,
              value: "吴起县"
            },
            {
              id: 4721,
              value: "子长县"
            },
            {
              id: 4722,
              value: "安塞县"
            },
            {
              id: 4723,
              value: "宜川县"
            },
            {
              id: 4724,
              value: "宝塔区"
            },
            {
              id: 4725,
              value: "富县"
            },
            {
              id: 4726,
              value: "延川县"
            },
            {
              id: 4727,
              value: "延长县"
            },
            {
              id: 4728,
              value: "志丹县"
            },
            {
              id: 4729,
              value: "洛川县"
            },
            {
              id: 4730,
              value: "甘泉县"
            },
            {
              id: 4731,
              value: "黄陵县"
            },
            {
              id: 4732,
              value: "黄龙县"
            }
          ]
        },
        {
          id: 444,
          value: "汉中市",
          area: [{
              id: 4733,
              value: "佛坪县"
            },
            {
              id: 4734,
              value: "勉县"
            },
            {
              id: 4735,
              value: "南郑县"
            },
            {
              id: 4736,
              value: "城固县"
            },
            {
              id: 4737,
              value: "宁强县"
            },
            {
              id: 4738,
              value: "汉台区"
            },
            {
              id: 4739,
              value: "洋县"
            },
            {
              id: 4740,
              value: "留坝县"
            },
            {
              id: 4741,
              value: "略阳县"
            },
            {
              id: 4742,
              value: "西乡县"
            },
            {
              id: 4743,
              value: "镇巴县"
            }
          ]
        },
        {
          id: 445,
          value: "榆林市",
          area: [{
              id: 4744,
              value: "佳县"
            },
            {
              id: 4745,
              value: "吴堡县"
            },
            {
              id: 4746,
              value: "子洲县"
            },
            {
              id: 4747,
              value: "定边县"
            },
            {
              id: 4748,
              value: "府谷县"
            },
            {
              id: 4749,
              value: "榆林市榆阳区"
            },
            {
              id: 4750,
              value: "横山县"
            },
            {
              id: 4751,
              value: "清涧县"
            },
            {
              id: 4752,
              value: "神木县"
            },
            {
              id: 4753,
              value: "米脂县"
            },
            {
              id: 4754,
              value: "绥德县"
            },
            {
              id: 4755,
              value: "靖边县"
            }
          ]
        },
        {
          id: 446,
          value: "安康市",
          area: [{
              id: 4756,
              value: "宁陕县"
            },
            {
              id: 4757,
              value: "岚皋县"
            },
            {
              id: 4758,
              value: "平利县"
            },
            {
              id: 4759,
              value: "旬阳县"
            },
            {
              id: 4760,
              value: "汉滨区"
            },
            {
              id: 4761,
              value: "汉阴县"
            },
            {
              id: 4762,
              value: "白河县"
            },
            {
              id: 4763,
              value: "石泉县"
            },
            {
              id: 4764,
              value: "紫阳县"
            },
            {
              id: 4765,
              value: "镇坪县"
            }
          ]
        },
        {
          id: 447,
          value: "商洛市",
          area: [{
              id: 4766,
              value: "丹凤县"
            },
            {
              id: 4767,
              value: "商南县"
            },
            {
              id: 4768,
              value: "商州区"
            },
            {
              id: 4769,
              value: "山阳县"
            },
            {
              id: 4770,
              value: "柞水县"
            },
            {
              id: 4771,
              value: "洛南县"
            },
            {
              id: 4772,
              value: "镇安县"
            }
          ]
        }
      ]
    },
    {
      id: 28,
      value: "甘肃",
      city: [{
          id: 448,
          value: "兰州市",
          area: [{
              id: 4773,
              value: "七里河区"
            },
            {
              id: 4774,
              value: "城关区"
            },
            {
              id: 4775,
              value: "安宁区"
            },
            {
              id: 4776,
              value: "榆中县"
            },
            {
              id: 4777,
              value: "永登县"
            },
            {
              id: 4778,
              value: "皋兰县"
            },
            {
              id: 4779,
              value: "红古区"
            },
            {
              id: 4780,
              value: "西固区"
            }
          ]
        },
        {
          id: 449,
          value: "嘉峪关市",
          area: [{
            id: 4781,
            value: "嘉峪关市"
          }]
        },
        {
          id: 450,
          value: "金昌市",
          area: [{
              id: 4782,
              value: "永昌县"
            },
            {
              id: 4783,
              value: "金川区"
            }
          ]
        },
        {
          id: 451,
          value: "白银市",
          area: [{
              id: 4784,
              value: "会宁县"
            },
            {
              id: 4785,
              value: "平川区"
            },
            {
              id: 4786,
              value: "景泰县"
            },
            {
              id: 4787,
              value: "白银区"
            },
            {
              id: 4788,
              value: "靖远县"
            }
          ]
        },
        {
          id: 452,
          value: "天水市",
          area: [{
              id: 4789,
              value: "张家川回族自治县"
            },
            {
              id: 4790,
              value: "武山县"
            },
            {
              id: 4791,
              value: "清水县"
            },
            {
              id: 4792,
              value: "甘谷县"
            },
            {
              id: 4793,
              value: "秦安县"
            },
            {
              id: 4794,
              value: "秦州区"
            },
            {
              id: 4795,
              value: "麦积区"
            }
          ]
        },
        {
          id: 453,
          value: "武威市",
          area: [{
              id: 4796,
              value: "凉州区"
            },
            {
              id: 4797,
              value: "古浪县"
            },
            {
              id: 4798,
              value: "天祝藏族自治县"
            },
            {
              id: 4799,
              value: "民勤县"
            }
          ]
        },
        {
          id: 454,
          value: "张掖市",
          area: [{
              id: 4800,
              value: "临泽县"
            },
            {
              id: 4801,
              value: "山丹县"
            },
            {
              id: 4802,
              value: "民乐县"
            },
            {
              id: 4803,
              value: "甘州区"
            },
            {
              id: 4804,
              value: "肃南裕固族自治县"
            },
            {
              id: 4805,
              value: "高台县"
            }
          ]
        },
        {
          id: 455,
          value: "平凉市",
          area: [{
              id: 4806,
              value: "华亭县"
            },
            {
              id: 4807,
              value: "崆峒区"
            },
            {
              id: 4808,
              value: "崇信县"
            },
            {
              id: 4809,
              value: "庄浪县"
            },
            {
              id: 4810,
              value: "泾川县"
            },
            {
              id: 4811,
              value: "灵台县"
            },
            {
              id: 4812,
              value: "静宁县"
            }
          ]
        },
        {
          id: 456,
          value: "酒泉市",
          area: [{
              id: 4813,
              value: "敦煌市"
            },
            {
              id: 4814,
              value: "玉门市"
            },
            {
              id: 4815,
              value: "瓜州县（原安西县）"
            },
            {
              id: 4816,
              value: "肃北蒙古族自治县"
            },
            {
              id: 4817,
              value: "肃州区"
            },
            {
              id: 4818,
              value: "金塔县"
            },
            {
              id: 4819,
              value: "阿克塞哈萨克族自治县"
            }
          ]
        },
        {
          id: 457,
          value: "庆阳市",
          area: [{
              id: 4820,
              value: "华池县"
            },
            {
              id: 4821,
              value: "合水县"
            },
            {
              id: 4822,
              value: "宁县"
            },
            {
              id: 4823,
              value: "庆城县"
            },
            {
              id: 4824,
              value: "正宁县"
            },
            {
              id: 4825,
              value: "环县"
            },
            {
              id: 4826,
              value: "西峰区"
            },
            {
              id: 4827,
              value: "镇原县"
            }
          ]
        },
        {
          id: 458,
          value: "定西市",
          area: [{
              id: 4828,
              value: "临洮县"
            },
            {
              id: 4829,
              value: "安定区"
            },
            {
              id: 4830,
              value: "岷县"
            },
            {
              id: 4831,
              value: "渭源县"
            },
            {
              id: 4832,
              value: "漳县"
            },
            {
              id: 4833,
              value: "通渭县"
            },
            {
              id: 4834,
              value: "陇西县"
            }
          ]
        },
        {
          id: 459,
          value: "陇南市",
          area: [{
              id: 4835,
              value: "两当县"
            },
            {
              id: 4836,
              value: "宕昌县"
            },
            {
              id: 4837,
              value: "康县"
            },
            {
              id: 4838,
              value: "徽县"
            },
            {
              id: 4839,
              value: "成县"
            },
            {
              id: 4840,
              value: "文县"
            },
            {
              id: 4841,
              value: "武都区"
            },
            {
              id: 4842,
              value: "礼县"
            },
            {
              id: 4843,
              value: "西和县"
            }
          ]
        },
        {
          id: 460,
          value: "临夏回族自治州",
          area: [{
              id: 4844,
              value: "东乡族自治县"
            },
            {
              id: 4845,
              value: "临夏县"
            },
            {
              id: 4846,
              value: "临夏市"
            },
            {
              id: 4847,
              value: "和政县"
            },
            {
              id: 4848,
              value: "广河县"
            },
            {
              id: 4849,
              value: "康乐县"
            },
            {
              id: 4850,
              value: "永靖县"
            },
            {
              id: 4851,
              value: "积石山保安族东乡族撒拉族自治县"
            }
          ]
        },
        {
          id: 461,
          value: "甘南藏族自治州",
          area: [{
              id: 4852,
              value: "临潭县"
            },
            {
              id: 4853,
              value: "卓尼县"
            },
            {
              id: 4854,
              value: "合作市"
            },
            {
              id: 4855,
              value: "夏河县"
            },
            {
              id: 4856,
              value: "玛曲县"
            },
            {
              id: 4857,
              value: "碌曲县"
            },
            {
              id: 4858,
              value: "舟曲县"
            },
            {
              id: 4859,
              value: "迭部县"
            }
          ]
        }
      ]
    },
    {
      id: 29,
      value: "青海",
      city: [{
          id: 462,
          value: "西宁市",
          area: [{
              id: 4860,
              value: "城东区"
            },
            {
              id: 4861,
              value: "城中区"
            },
            {
              id: 4862,
              value: "城北区"
            },
            {
              id: 4863,
              value: "城西区"
            },
            {
              id: 4864,
              value: "大通回族土族自治县"
            },
            {
              id: 4865,
              value: "湟中县"
            },
            {
              id: 4866,
              value: "湟源县"
            }
          ]
        },
        {
          id: 463,
          value: "海东地区",
          area: [{
              id: 4867,
              value: "乐都县"
            },
            {
              id: 4868,
              value: "互助土族自治县"
            },
            {
              id: 4869,
              value: "化隆回族自治县"
            },
            {
              id: 4870,
              value: "平安县"
            },
            {
              id: 4871,
              value: "循化撒拉族自治县"
            },
            {
              id: 4872,
              value: "民和回族土族自治县"
            }
          ]
        },
        {
          id: 464,
          value: "海北藏族自治州",
          area: [{
              id: 4873,
              value: "刚察县"
            },
            {
              id: 4874,
              value: "海晏县"
            },
            {
              id: 4875,
              value: "祁连县"
            },
            {
              id: 4876,
              value: "门源回族自治县"
            }
          ]
        },
        {
          id: 465,
          value: "黄南藏族自治州",
          area: [{
              id: 4877,
              value: "同仁县"
            },
            {
              id: 4878,
              value: "尖扎县"
            },
            {
              id: 4879,
              value: "河南蒙古族自治县"
            },
            {
              id: 4880,
              value: "泽库县"
            }
          ]
        },
        {
          id: 466,
          value: "海南藏族自治州",
          area: [{
              id: 4881,
              value: "共和县"
            },
            {
              id: 4882,
              value: "兴海县"
            },
            {
              id: 4883,
              value: "同德县"
            },
            {
              id: 4884,
              value: "贵南县"
            },
            {
              id: 4885,
              value: "贵德县"
            }
          ]
        },
        {
          id: 467,
          value: "果洛藏族自治州",
          area: [{
              id: 4886,
              value: "久治县"
            },
            {
              id: 4887,
              value: "玛多县"
            },
            {
              id: 4888,
              value: "玛沁县"
            },
            {
              id: 4889,
              value: "班玛县"
            },
            {
              id: 4890,
              value: "甘德县"
            },
            {
              id: 4891,
              value: "达日县"
            }
          ]
        },
        {
          id: 468,
          value: "玉树藏族自治州",
          area: [{
              id: 4892,
              value: "囊谦县"
            },
            {
              id: 4893,
              value: "曲麻莱县"
            },
            {
              id: 4894,
              value: "杂多县"
            },
            {
              id: 4895,
              value: "治多县"
            },
            {
              id: 4896,
              value: "玉树县"
            },
            {
              id: 4897,
              value: "称多县"
            }
          ]
        },
        {
          id: 469,
          value: "海西蒙古族藏族自治州",
          area: [{
              id: 4898,
              value: "乌兰县"
            },
            {
              id: 4899,
              value: "冷湖行委"
            },
            {
              id: 4900,
              value: "大柴旦行委"
            },
            {
              id: 4901,
              value: "天峻县"
            },
            {
              id: 4902,
              value: "德令哈市"
            },
            {
              id: 4903,
              value: "格尔木市"
            },
            {
              id: 4904,
              value: "茫崖行委"
            },
            {
              id: 4905,
              value: "都兰县"
            }
          ]
        }
      ]
    },
    {
      id: 30,
      value: "宁夏",
      city: [{
          id: 470,
          value: "银川市",
          area: [{
              id: 4906,
              value: "兴庆区"
            },
            {
              id: 4907,
              value: "永宁县"
            },
            {
              id: 4908,
              value: "灵武市"
            },
            {
              id: 4909,
              value: "西夏区"
            },
            {
              id: 4910,
              value: "贺兰县"
            },
            {
              id: 4911,
              value: "金凤区"
            }
          ]
        },
        {
          id: 471,
          value: "石嘴山市",
          area: [{
              id: 4912,
              value: "大武口区"
            },
            {
              id: 4913,
              value: "平罗县"
            },
            {
              id: 4914,
              value: "惠农区"
            }
          ]
        },
        {
          id: 472,
          value: "吴忠市",
          area: [{
              id: 4915,
              value: "利通区"
            },
            {
              id: 4916,
              value: "同心县"
            },
            {
              id: 4917,
              value: "盐池县"
            },
            {
              id: 4918,
              value: "青铜峡市"
            }
          ]
        },
        {
          id: 473,
          value: "固原市",
          area: [{
              id: 4919,
              value: "原州区"
            },
            {
              id: 4920,
              value: "彭阳县"
            },
            {
              id: 4921,
              value: "泾源县"
            },
            {
              id: 4922,
              value: "西吉县"
            },
            {
              id: 4923,
              value: "隆德县"
            }
          ]
        },
        {
          id: 474,
          value: "中卫市",
          area: [{
              id: 4924,
              value: "中宁县"
            },
            {
              id: 4925,
              value: "沙坡头区"
            },
            {
              id: 4926,
              value: "海原县"
            }
          ]
        }
      ]
    },
    {
      id: 31,
      value: "新疆",
      city: [{
          id: 475,
          value: "乌鲁木齐市",
          area: [{
              id: 4927,
              value: "东山区"
            },
            {
              id: 4928,
              value: "乌鲁木齐县"
            },
            {
              id: 4929,
              value: "天山区"
            },
            {
              id: 4930,
              value: "头屯河区"
            },
            {
              id: 4931,
              value: "新市区"
            },
            {
              id: 4932,
              value: "水磨沟区"
            },
            {
              id: 4933,
              value: "沙依巴克区"
            },
            {
              id: 4934,
              value: "达坂城区"
            }
          ]
        },
        {
          id: 476,
          value: "克拉玛依市",
          area: [{
              id: 4935,
              value: "乌尔禾区"
            },
            {
              id: 4936,
              value: "克拉玛依区"
            },
            {
              id: 4937,
              value: "独山子区"
            },
            {
              id: 4938,
              value: "白碱滩区"
            }
          ]
        },
        {
          id: 477,
          value: "吐鲁番地区",
          area: [{
              id: 4939,
              value: "吐鲁番市"
            },
            {
              id: 4940,
              value: "托克逊县"
            },
            {
              id: 4941,
              value: "鄯善县"
            }
          ]
        },
        {
          id: 478,
          value: "哈密地区",
          area: [{
              id: 4942,
              value: "伊吾县"
            },
            {
              id: 4943,
              value: "哈密市"
            },
            {
              id: 4944,
              value: "巴里坤哈萨克自治县"
            }
          ]
        },
        {
          id: 479,
          value: "昌吉回族自治州",
          area: [{
              id: 4945,
              value: "吉木萨尔县"
            },
            {
              id: 4946,
              value: "呼图壁县"
            },
            {
              id: 4947,
              value: "奇台县"
            },
            {
              id: 4948,
              value: "昌吉市"
            },
            {
              id: 4949,
              value: "木垒哈萨克自治县"
            },
            {
              id: 4950,
              value: "玛纳斯县"
            },
            {
              id: 4951,
              value: "米泉市"
            },
            {
              id: 4952,
              value: "阜康市"
            }
          ]
        },
        {
          id: 480,
          value: "博尔塔拉蒙古自治州",
          area: [{
              id: 4953,
              value: "博乐市"
            },
            {
              id: 4954,
              value: "温泉县"
            },
            {
              id: 4955,
              value: "精河县"
            }
          ]
        },
        {
          id: 481,
          value: "巴音郭楞蒙古自治州",
          area: [{
              id: 4956,
              value: "博湖县"
            },
            {
              id: 4957,
              value: "和硕县"
            },
            {
              id: 4958,
              value: "和静县"
            },
            {
              id: 4959,
              value: "尉犁县"
            },
            {
              id: 4960,
              value: "库尔勒市"
            },
            {
              id: 4961,
              value: "焉耆回族自治县"
            },
            {
              id: 4962,
              value: "若羌县"
            },
            {
              id: 4963,
              value: "轮台县"
            }
          ]
        },
        {
          id: 482,
          value: "阿克苏地区",
          area: [{
              id: 4964,
              value: "乌什县"
            },
            {
              id: 4965,
              value: "库车县"
            },
            {
              id: 4966,
              value: "拜城县"
            },
            {
              id: 4967,
              value: "新和县"
            },
            {
              id: 4968,
              value: "柯坪县"
            },
            {
              id: 4969,
              value: "沙雅县"
            },
            {
              id: 4970,
              value: "温宿县"
            },
            {
              id: 4971,
              value: "阿克苏市"
            },
            {
              id: 4972,
              value: "阿瓦提县"
            }
          ]
        },
        {
          id: 483,
          value: "克孜勒苏柯尔克孜自治州",
          area: [{
              id: 4973,
              value: "乌恰县"
            },
            {
              id: 4974,
              value: "阿克陶县"
            },
            {
              id: 4975,
              value: "阿合奇县"
            },
            {
              id: 4976,
              value: "阿图什市"
            }
          ]
        },
        {
          id: 484,
          value: "喀什地区",
          area: [{
              id: 4977,
              value: "伽师县"
            },
            {
              id: 4978,
              value: "叶城县"
            },
            {
              id: 4979,
              value: "喀什市"
            },
            {
              id: 4980,
              value: "塔什库尔干塔吉克自治县"
            },
            {
              id: 4981,
              value: "岳普湖县"
            },
            {
              id: 4982,
              value: "巴楚县"
            },
            {
              id: 4983,
              value: "泽普县"
            },
            {
              id: 4984,
              value: "疏勒县"
            },
            {
              id: 4985,
              value: "疏附县"
            },
            {
              id: 4986,
              value: "英吉沙县"
            },
            {
              id: 4987,
              value: "莎车县"
            },
            {
              id: 4988,
              value: "麦盖提县"
            }
          ]
        },
        {
          id: 485,
          value: "和田地区",
          area: [{
              id: 4989,
              value: "于田县"
            },
            {
              id: 4990,
              value: "和田县"
            },
            {
              id: 4991,
              value: "和田市"
            },
            {
              id: 4992,
              value: "墨玉县"
            },
            {
              id: 4993,
              value: "民丰县"
            },
            {
              id: 4994,
              value: "洛浦县"
            },
            {
              id: 4995,
              value: "皮山县"
            },
            {
              id: 4996,
              value: "策勒县"
            }
          ]
        },
        {
          id: 486,
          value: "伊犁哈萨克自治州",
          area: [{
              id: 4997,
              value: "伊宁县"
            },
            {
              id: 4998,
              value: "伊宁市"
            },
            {
              id: 4999,
              value: "奎屯市"
            },
            {
              id: 5000,
              value: "察布查尔锡伯自治县"
            },
            {
              id: 5001,
              value: "尼勒克县"
            },
            {
              id: 5002,
              value: "巩留县"
            },
            {
              id: 5003,
              value: "新源县"
            },
            {
              id: 5004,
              value: "昭苏县"
            },
            {
              id: 5005,
              value: "特克斯县"
            },
            {
              id: 5006,
              value: "霍城县"
            }
          ]
        },
        {
          id: 487,
          value: "塔城地区",
          area: [{
              id: 5007,
              value: "乌苏市"
            },
            {
              id: 5008,
              value: "和布克赛尔蒙古自治县"
            },
            {
              id: 5009,
              value: "塔城市"
            },
            {
              id: 5010,
              value: "托里县"
            },
            {
              id: 5011,
              value: "沙湾县"
            },
            {
              id: 5012,
              value: "裕民县"
            },
            {
              id: 5013,
              value: "额敏县"
            }
          ]
        },
        {
          id: 488,
          value: "阿勒泰地区",
          area: [{
              id: 5014,
              value: "吉木乃县"
            },
            {
              id: 5015,
              value: "哈巴河县"
            },
            {
              id: 5016,
              value: "富蕴县"
            },
            {
              id: 5017,
              value: "布尔津县"
            },
            {
              id: 5018,
              value: "福海县"
            },
            {
              id: 5019,
              value: "阿勒泰市"
            },
            {
              id: 5020,
              value: "青河县"
            }
          ]
        },
        {
          id: 489,
          value: "石河子市",
          area: [{
            id: 5021,
            value: "石河子市"
          }]
        },
        {
          id: 490,
          value: "阿拉尔市",
          area: [{
            id: 5022,
            value: "阿拉尔市"
          }]
        },
        {
          id: 491,
          value: "图木舒克市",
          area: [{
            id: 5023,
            value: "图木舒克市"
          }]
        },
        {
          id: 492,
          value: "五家渠市",
          area: [{
            id: 5024,
            value: "五家渠市"
          }]
        }
      ]
    },
    {
      id: 32,
      value: "台湾",
      city: [{
        id: 32,
        value: "台湾",
        area: [{
            id: 493,
            value: "台北市"
          },
          {
            id: 494,
            value: "高雄市"
          },
          {
            id: 495,
            value: "基隆市"
          },
          {
            id: 496,
            value: "台中市"
          },
          {
            id: 497,
            value: "台南市"
          },
          {
            id: 498,
            value: "新竹市"
          },
          {
            id: 499,
            value: "嘉义市"
          },
          {
            id: 500,
            value: "台北县"
          },
          {
            id: 501,
            value: "宜兰县"
          },
          {
            id: 502,
            value: "桃园县"
          },
          {
            id: 503,
            value: "新竹县"
          },
          {
            id: 504,
            value: "苗栗县"
          },
          {
            id: 505,
            value: "台中县"
          },
          {
            id: 506,
            value: "彰化县"
          },
          {
            id: 507,
            value: "南投县"
          },
          {
            id: 508,
            value: "云林县"
          },
          {
            id: 509,
            value: "嘉义县"
          },
          {
            id: 510,
            value: "台南县"
          },
          {
            id: 511,
            value: "高雄县"
          },
          {
            id: 512,
            value: "屏东县"
          },
          {
            id: 513,
            value: "澎湖县"
          },
          {
            id: 514,
            value: "台东县"
          },
          {
            id: 515,
            value: "花莲县"
          }
        ]
      }]
    },
    {
      id: 33,
      value: "香港",
      city: [{
        id: 33,
        value: "香港",
        area: [{
            id: 516,
            value: "中西区"
          },
          {
            id: 517,
            value: "东区"
          },
          {
            id: 518,
            value: "九龙城区"
          },
          {
            id: 519,
            value: "观塘区"
          },
          {
            id: 520,
            value: "南区"
          },
          {
            id: 521,
            value: "深水埗区"
          },
          {
            id: 522,
            value: "黄大仙区"
          },
          {
            id: 523,
            value: "湾仔区"
          },
          {
            id: 524,
            value: "油尖旺区"
          },
          {
            id: 525,
            value: "离岛区"
          },
          {
            id: 526,
            value: "葵青区"
          },
          {
            id: 527,
            value: "北区"
          },
          {
            id: 528,
            value: "西贡区"
          },
          {
            id: 529,
            value: "沙田区"
          },
          {
            id: 530,
            value: "屯门区"
          },
          {
            id: 531,
            value: "大埔区"
          },
          {
            id: 532,
            value: "荃湾区"
          },
          {
            id: 533,
            value: "元朗区"
          }
        ]
      }]
    },
    {
      id: 34,
      value: "澳门",
      city: [{
        id: 34,
        value: "澳门",
        area: [{
          id: 534,
          value: "澳门特别行政区",
        }]
      }]
    }
  ]
  var data
  console.log(key)
  if (key == 's_province') {
    data = new Array
    for (let i = 0; i < cityArr.length; i++) {
      let id = cityArr[i].id;
      let value = cityArr[i].value;
      data.push({ id, value })
    }
  } else if (key == 's_city') {
    for (let i = 0; i < cityArr.length; i++) {
      if (cityArr[i].id == provinceid) {
        data = cityArr[i].city
      }
    }
  } else if (key == 's_county') {
    console.log(provinceid,cityid)
    for (let i = 0; i < cityArr.length; i++) {
      if (cityArr[i].id == provinceid) {
        data = cityArr[i].city;
        for (let j = 0; j < data.length; j++) {
          if (data[j].id == cityid) {
            data = data[j].area;
            console.log(data)
          }
        }
      }
    }
  }

  return data;
}
const collegeData = function(key) {
  var college = [{
      id: 1,
      value: "解放军艺术学院"
    },
    {
      id: 2,
      value: "北京大学"
    },
    {
      id: 3,
      value: "中国人民大学"
    },
    {
      id: 4,
      value: "清华大学美术学院"
    },
    {
      id: 5,
      value: "北京交通大学"
    },
    {
      id: 6,
      value: "北京工业大学"
    },
    {
      id: 7,
      value: "北京航空航天大学"
    },
    {
      id: 8,
      value: "北京理工大学"
    },
    {
      id: 9,
      value: "北京科技大学"
    },
    {
      id: 10,
      value: "北方工业大学"
    },
    {
      id: 11,
      value: "北京化工大学"
    },
    {
      id: 12,
      value: "北京工商大学"
    },
    {
      id: 13,
      value: "北京服装学院"
    },
    {
      id: 14,
      value: "北京邮电大学"
    },
    {
      id: 15,
      value: "北京印刷学院"
    },
    {
      id: 16,
      value: "北京农学院"
    },
    {
      id: 17,
      value: "北京林业大学"
    },
    {
      id: 18,
      value: "北京师范大学"
    },
    {
      id: 19,
      value: "首都师范大学"
    },
    {
      id: 20,
      value: "首都体育学院"
    },
    {
      id: 21,
      value: "北京语言大学"
    },
    {
      id: 22,
      value: "中国传媒大学"
    },
    {
      id: 23,
      value: "中央财经大学"
    },
    {
      id: 24,
      value: "北京体育大学"
    },
    {
      id: 25,
      value: "中央音乐学院"
    },
    {
      id: 26,
      value: "中国音乐学院"
    },
    {
      id: 27,
      value: "中央美术学院"
    },
    {
      id: 28,
      value: "中央戏剧学院"
    },
    {
      id: 29,
      value: "中国戏曲学院"
    },
    {
      id: 30,
      value: "北京电影学院"
    },
    {
      id: 31,
      value: "北京舞蹈学院"
    },
    {
      id: 32,
      value: "中央民族大学"
    },
    {
      id: 33,
      value: "中华女子学院"
    },
    {
      id: 34,
      value: "中国石油大学(北京)"
    },
    {
      id: 35,
      value: "中国地质大学(北京)"
    },
    {
      id: 36,
      value: "北京联合大学"
    },
    {
      id: 37,
      value: "北京城市学院"
    },
    {
      id: 38,
      value: "中国劳动关系学院"
    },
    {
      id: 39,
      value: "首都师范大学科德学院"
    },
    {
      id: 40,
      value: "北京工商大学嘉华学院"
    },
    {
      id: 41,
      value: "北京邮电大学世纪学院"
    },
    {
      id: 42,
      value: "北京工业大学耿丹学院"
    },
    {
      id: 43,
      value: "西藏民族大学"
    },
    {
      id: 44,
      value: "西北大学"
    },
    {
      id: 45,
      value: "西安交通大学"
    },
    {
      id: 46,
      value: "西北工业大学"
    },
    {
      id: 47,
      value: "西安理工大学"
    },
    {
      id: 48,
      value: "西安电子科技大学"
    },
    {
      id: 49,
      value: "西安工业大学"
    },
    {
      id: 50,
      value: "西安建筑科技大学"
    },
    {
      id: 51,
      value: "西安科技大学"
    },
    {
      id: 52,
      value: "西安石油大学"
    },
    {
      id: 53,
      value: "陕西科技大学"
    },
    {
      id: 54,
      value: "西安工程大学"
    },
    {
      id: 55,
      value: "长安大学"
    },
    {
      id: 56,
      value: "西北农林科技大学"
    },
    {
      id: 57,
      value: "陕西师范大学"
    },
    {
      id: 58,
      value: "延安大学"
    },
    {
      id: 59,
      value: "陕西理工学院"
    },
    {
      id: 60,
      value: "宝鸡文理学院"
    },
    {
      id: 61,
      value: "咸阳师范学院"
    },
    {
      id: 62,
      value: "渭南师范学院"
    },
    {
      id: 63,
      value: "西安外国语大学"
    },
    {
      id: 64,
      value: "西北政法大学"
    },
    {
      id: 65,
      value: "西安体育学院"
    },
    {
      id: 66,
      value: "西安音乐学院"
    },
    {
      id: 67,
      value: "西安美术学院"
    },
    {
      id: 68,
      value: "西安文理学院"
    },
    {
      id: 69,
      value: "榆林学院"
    },
    {
      id: 70,
      value: "商洛学院"
    },
    {
      id: 71,
      value: "安康学院"
    },
    {
      id: 72,
      value: "西安培华学院"
    },
    {
      id: 73,
      value: "西安财经学院"
    },
    {
      id: 74,
      value: "西安欧亚学院"
    },
    {
      id: 75,
      value: "西安外事学院"
    },
    {
      id: 76,
      value: "西安翻译学院"
    },
    {
      id: 77,
      value: "西京学院"
    },
    {
      id: 78,
      value: "陕西国际商贸学院"
    },
    {
      id: 79,
      value: "陕西服装工程学院"
    },
    {
      id: 80,
      value: "西安交通大学城市学院"
    },
    {
      id: 81,
      value: "西北大学现代学院"
    },
    {
      id: 82,
      value: "西安建筑科技大学华清学院"
    },
    {
      id: 83,
      value: "西安财经学院行知学院"
    },
    {
      id: 84,
      value: "陕西科技大学镐京学院"
    },
    {
      id: 85,
      value: "延安大学西安创新学院"
    },
    {
      id: 86,
      value: "西北工业大学明德学院"
    },
    {
      id: 87,
      value: "西安科技大学高新学院"
    },
    {
      id: 88,
      value: "安徽大学"
    },
    {
      id: 89,
      value: "合肥工业大学"
    },
    {
      id: 90,
      value: "安徽工业大学"
    },
    {
      id: 91,
      value: "安徽工程大学"
    },
    {
      id: 92,
      value: "安徽农业大学"
    },
    {
      id: 93,
      value: "安徽师范大学"
    },
    {
      id: 94,
      value: "阜阳师范学院"
    },
    {
      id: 95,
      value: "安庆师范学院"
    },
    {
      id: 96,
      value: "淮北师范大学"
    },
    {
      id: 97,
      value: "黄山学院"
    },
    {
      id: 98,
      value: "皖西学院"
    },
    {
      id: 99,
      value: "滁州学院"
    },
    {
      id: 100,
      value: "安徽财经大学"
    },
    {
      id: 101,
      value: "宿州学院"
    },
    {
      id: 102,
      value: "巢湖学院"
    },
    {
      id: 103,
      value: "淮南师范学院"
    },
    {
      id: 104,
      value: "铜陵学院"
    },
    {
      id: 105,
      value: "安徽建筑大学"
    },
    {
      id: 106,
      value: "安徽三联学院"
    },
    {
      id: 107,
      value: "合肥学院"
    },
    {
      id: 108,
      value: "蚌埠学院"
    },
    {
      id: 109,
      value: "池州学院"
    },
    {
      id: 110,
      value: "安徽新华学院"
    },
    {
      id: 111,
      value: "安徽文达信息工程学院"
    },
    {
      id: 112,
      value: "安徽大学江淮学院"
    },
    {
      id: 113,
      value: "安徽工程大学机电学院"
    },
    {
      id: 114,
      value: "安徽工业大学工商学院"
    },
    {
      id: 115,
      value: "安徽建筑工业学院城市建设学院"
    },
    {
      id: 116,
      value: "安徽农业大学经济技术学院"
    },
    {
      id: 117,
      value: "安徽师范大学皖江学院"
    },
    {
      id: 118,
      value: "阜阳师范学院信息工程学院"
    },
    {
      id: 119,
      value: "合肥师范学院"
    },
    {
      id: 120,
      value: "浙江大学"
    },
    {
      id: 121,
      value: "杭州电子科技大学"
    },
    {
      id: 122,
      value: "浙江工业大学"
    },
    {
      id: 123,
      value: "浙江理工大学"
    },
    {
      id: 124,
      value: "浙江农林大学"
    },
    {
      id: 125,
      value: "浙江师范大学"
    },
    {
      id: 126,
      value: "杭州师范大学"
    },
    {
      id: 127,
      value: "湖州师范学院"
    },
    {
      id: 128,
      value: "绍兴文理学院"
    },
    {
      id: 129,
      value: "台州学院"
    },
    {
      id: 130,
      value: "温州大学"
    },
    {
      id: 131,
      value: "丽水学院"
    },
    {
      id: 132,
      value: "浙江工商大学"
    },
    {
      id: 133,
      value: "嘉兴学院"
    },
    {
      id: 134,
      value: "中国美术学院"
    },
    {
      id: 135,
      value: "中国计量学院"
    },
    {
      id: 136,
      value: "浙江万里学院"
    },
    {
      id: 137,
      value: "浙江科技学院"
    },
    {
      id: 138,
      value: "浙江财经学院"
    },
    {
      id: 139,
      value: "衢州学院"
    },
    {
      id: 140,
      value: "宁波大学"
    },
    {
      id: 141,
      value: "浙江传媒学院"
    },
    {
      id: 142,
      value: "浙江树人学院"
    },
    {
      id: 143,
      value: "宁波大红鹰学院"
    },
    {
      id: 144,
      value: "浙江大学城市学院"
    },
    {
      id: 145,
      value: "浙江大学宁波理工学院"
    },
    {
      id: 146,
      value: "浙江工业大学之江学院"
    },
    {
      id: 147,
      value: "浙江师范大学行知学院"
    },
    {
      id: 148,
      value: "宁波大学科学技术学院"
    },
    {
      id: 149,
      value: "浙江理工大学科技与艺术学院"
    },
    {
      id: 150,
      value: "杭州师范大学钱江学院"
    },
    {
      id: 151,
      value: "湖州师范学院求真学院"
    },
    {
      id: 152,
      value: "绍兴文理学院元培学院"
    },
    {
      id: 153,
      value: "温州大学瓯江学院"
    },
    {
      id: 154,
      value: "浙江工商大学杭州商学院"
    },
    {
      id: 155,
      value: "中国计量学院现代科技学院"
    },
    {
      id: 156,
      value: "浙江财经大学东方学院"
    },
    {
      id: 157,
      value: "温州大学城市学院"
    },
    {
      id: 158,
      value: "浙江外国语学院"
    },
    {
      id: 159,
      value: "南开大学"
    },
    {
      id: 160,
      value: "天津大学"
    },
    {
      id: 161,
      value: "天津科技大学"
    },
    {
      id: 162,
      value: "天津工业大学"
    },
    {
      id: 163,
      value: "天津理工大学"
    },
    {
      id: 164,
      value: "天津师范大学"
    },
    {
      id: 165,
      value: "天津职业技术师范大学"
    },
    {
      id: 166,
      value: "天津外国语大学"
    },
    {
      id: 167,
      value: "天津商业大学"
    },
    {
      id: 168,
      value: "天津财经大学"
    },
    {
      id: 169,
      value: "天津体育学院"
    },
    {
      id: 170,
      value: "天津音乐学院"
    },
    {
      id: 171,
      value: "天津美术学院"
    },
    {
      id: 172,
      value: "河北工业大学"
    },
    {
      id: 173,
      value: "天津城建大学"
    },
    {
      id: 174,
      value: "天津天狮学院"
    },
    {
      id: 175,
      value: "天津体育学院运动与文化艺术学院"
    },
    {
      id: 176,
      value: "天津商业大学宝德学院"
    },
    {
      id: 177,
      value: "南开大学滨海学院"
    },
    {
      id: 178,
      value: "天津师范大学津沽学院"
    },
    {
      id: 179,
      value: "天津理工大学中环信息学院"
    },
    {
      id: 180,
      value: "北京科技大学天津学院"
    },
    {
      id: 181,
      value: "天津大学仁爱学院"
    },
    {
      id: 182,
      value: "天津财经大学珠江学院"
    },
    {
      id: 183,
      value: "华北水利水电大学"
    },
    {
      id: 184,
      value: "郑州大学"
    },
    {
      id: 185,
      value: "河南理工大学"
    },
    {
      id: 186,
      value: "郑州轻工业学院"
    },
    {
      id: 187,
      value: "河南工业大学"
    },
    {
      id: 188,
      value: "河南科技大学"
    },
    {
      id: 189,
      value: "中原工学院"
    },
    {
      id: 190,
      value: "河南农业大学"
    },
    {
      id: 191,
      value: "河南科技学院"
    },
    {
      id: 192,
      value: "河南大学"
    },
    {
      id: 193,
      value: "河南师范大学"
    },
    {
      id: 194,
      value: "信阳师范学院"
    },
    {
      id: 195,
      value: "周口师范学院"
    },
    {
      id: 196,
      value: "安阳师范学院"
    },
    {
      id: 197,
      value: "许昌学院"
    },
    {
      id: 198,
      value: "南阳师范学院"
    },
    {
      id: 199,
      value: "洛阳师范学院"
    },
    {
      id: 200,
      value: "商丘师范学院"
    },
    {
      id: 201,
      value: "河南财经政法大学"
    },
    {
      id: 202,
      value: "郑州航空工业管理学院"
    },
    {
      id: 203,
      value: "黄淮学院"
    },
    {
      id: 204,
      value: "平顶山学院"
    },
    {
      id: 205,
      value: "洛阳理工学院"
    },
    {
      id: 206,
      value: "新乡学院"
    },
    {
      id: 207,
      value: "安阳工学院"
    },
    {
      id: 208,
      value: "河南工程学院"
    },
    {
      id: 209,
      value: "南阳理工学院"
    },
    {
      id: 210,
      value: "河南城建学院"
    },
    {
      id: 211,
      value: "黄河科技学院"
    },
    {
      id: 212,
      value: "郑州师范学院"
    },
    {
      id: 213,
      value: "郑州科技学院"
    },
    {
      id: 214,
      value: "郑州工业应用技术学院"
    },
    {
      id: 215,
      value: "河南大学民生学院"
    },
    {
      id: 216,
      value: "河南师范大学新联学院"
    },
    {
      id: 217,
      value: "信阳师范学院华锐学院"
    },
    {
      id: 218,
      value: "安阳师范学院人文管理学院"
    },
    {
      id: 219,
      value: "河南科技学院新科学院"
    },
    {
      id: 220,
      value: "河南理工大学万方科技学院"
    },
    {
      id: 221,
      value: "中原工学院信息商务学院"
    },
    {
      id: 222,
      value: "商丘学院"
    },
    {
      id: 223,
      value: "河南财经政法大学成功学院"
    },
    {
      id: 224,
      value: "河北大学"
    },
    {
      id: 225,
      value: "河北工程大学"
    },
    {
      id: 226,
      value: "河北地质大学（原石家庄经济学院）"
    },
    {
      id: 227,
      value: "华北电力大学(保定)"
    },
    {
      id: 228,
      value: "华北理工大学"
    },
    {
      id: 229,
      value: "河北科技大学"
    },
    {
      id: 230,
      value: "河北建筑工程学院"
    },
    {
      id: 231,
      value: "河北农业大学"
    },
    {
      id: 232,
      value: "河北北方学院"
    },
    {
      id: 233,
      value: "河北师范大学"
    },
    {
      id: 234,
      value: "保定学院"
    },
    {
      id: 235,
      value: "河北民族师范学院"
    },
    {
      id: 236,
      value: "唐山师范学院"
    },
    {
      id: 237,
      value: "廊坊师范学院"
    },
    {
      id: 238,
      value: "衡水学院"
    },
    {
      id: 239,
      value: "石家庄学院"
    },
    {
      id: 240,
      value: "邯郸学院"
    },
    {
      id: 241,
      value: "邢台学院"
    },
    {
      id: 242,
      value: "沧州师范学院"
    },
    {
      id: 243,
      value: "石家庄铁道大学"
    },
    {
      id: 244,
      value: "燕山大学"
    },
    {
      id: 245,
      value: "河北科技师范学院"
    },
    {
      id: 246,
      value: "华北科技学院"
    },
    {
      id: 247,
      value: "河北体育学院"
    },
    {
      id: 248,
      value: "河北经贸大学"
    },
    {
      id: 249,
      value: "河北传媒学院"
    },
    {
      id: 250,
      value: "河北美术学院"
    },
    {
      id: 251,
      value: "河北大学工商学院"
    },
    {
      id: 252,
      value: "河北理工大学轻工学院"
    },
    {
      id: 253,
      value: "河北科技大学理工学院"
    },
    {
      id: 254,
      value: "河北师范大学汇华学院"
    },
    {
      id: 255,
      value: "河北经贸大学经济管理学院"
    },
    {
      id: 256,
      value: "华北电力大学科技学院"
    },
    {
      id: 257,
      value: "河北工程大学科信学院"
    },
    {
      id: 258,
      value: "河北工业大学城市学院"
    },
    {
      id: 259,
      value: "燕山大学里仁学院"
    },
    {
      id: 260,
      value: "石家庄铁道大学四方学院"
    },
    {
      id: 261,
      value: "河北农业大学现代科技学院"
    },
    {
      id: 262,
      value: "中国地质大学长城学院"
    },
    {
      id: 263,
      value: "燕京理工学院"
    },
    {
      id: 264,
      value: "北京交通大学海滨学院"
    },
    {
      id: 265,
      value: "山东大学"
    },
    {
      id: 266,
      value: "中国海洋大学"
    },
    {
      id: 267,
      value: "山东科技大学"
    },
    {
      id: 268,
      value: "中国石油大学(华东)"
    },
    {
      id: 269,
      value: "青岛科技大学"
    },
    {
      id: 270,
      value: "济南大学"
    },
    {
      id: 271,
      value: "青岛理工大学"
    },
    {
      id: 272,
      value: "山东建筑大学"
    },
    {
      id: 273,
      value: "齐鲁工业大学"
    },
    {
      id: 274,
      value: "山东理工大学"
    },
    {
      id: 275,
      value: "山东农业大学"
    },
    {
      id: 276,
      value: "青岛农业大学"
    },
    {
      id: 277,
      value: "山东师范大学"
    },
    {
      id: 278,
      value: "曲阜师范大学"
    },
    {
      id: 279,
      value: "聊城大学"
    },
    {
      id: 280,
      value: "德州学院"
    },
    {
      id: 281,
      value: "滨州学院"
    },
    {
      id: 282,
      value: "鲁东大学"
    },
    {
      id: 283,
      value: "临沂大学"
    },
    {
      id: 284,
      value: "泰山学院"
    },
    {
      id: 285,
      value: "济宁学院"
    },
    {
      id: 286,
      value: "菏泽学院"
    },
    {
      id: 287,
      value: "山东财经大学"
    },
    {
      id: 288,
      value: "山东体育学院"
    },
    {
      id: 289,
      value: "山东艺术学院"
    },
    {
      id: 290,
      value: "青岛滨海学院"
    },
    {
      id: 291,
      value: "枣庄学院"
    },
    {
      id: 292,
      value: "山东工艺美术学院"
    },
    {
      id: 293,
      value: "青岛大学"
    },
    {
      id: 294,
      value: "烟台大学"
    },
    {
      id: 295,
      value: "潍坊学院"
    },
    {
      id: 296,
      value: "山东交通学院"
    },
    {
      id: 297,
      value: "山东财政学院"
    },
    {
      id: 298,
      value: "山东女子学院"
    },
    {
      id: 299,
      value: "烟台南山学院"
    },
    {
      id: 300,
      value: "潍坊科技学院"
    },
    {
      id: 301,
      value: "山东英才学院"
    },
    {
      id: 302,
      value: "烟台大学文经学院"
    },
    {
      id: 303,
      value: "青岛理工大学琴岛学院"
    },
    {
      id: 304,
      value: "中国石油大学胜利学院"
    },
    {
      id: 305,
      value: "青岛农业大学海都学院"
    },
    {
      id: 306,
      value: "齐鲁理工学院"
    },
    {
      id: 307,
      value: "山东财政学院东方学院"
    },
    {
      id: 308,
      value: "山东师范大学历山学院"
    },
    {
      id: 309,
      value: "聊城大学东昌学院"
    },
    {
      id: 310,
      value: "济南大学泉城学院"
    },
    {
      id: 311,
      value: "齐鲁师范学院"
    },
    {
      id: 312,
      value: "山东青年政治学院"
    },
    {
      id: 313,
      value: "北京电影学院现代创意媒体学院"
    },
    {
      id: 314,
      value: "山东大学威海分校"
    },
    {
      id: 315,
      value: "山西大学"
    },
    {
      id: 316,
      value: "太原科技大学"
    },
    {
      id: 317,
      value: "中北大学"
    },
    {
      id: 318,
      value: "太原理工大学"
    },
    {
      id: 319,
      value: "山西农业大学"
    },
    {
      id: 320,
      value: "长治医学院"
    },
    {
      id: 321,
      value: "山西师范大学"
    },
    {
      id: 322,
      value: "太原师范学院"
    },
    {
      id: 323,
      value: "山西大同大学"
    },
    {
      id: 324,
      value: "晋中学院"
    },
    {
      id: 325,
      value: "长治学院"
    },
    {
      id: 326,
      value: "运城学院"
    },
    {
      id: 327,
      value: "忻州师范学院"
    },
    {
      id: 328,
      value: "山西财经大学"
    },
    {
      id: 329,
      value: "吕梁学院"
    },
    {
      id: 330,
      value: "山西大学商务学院"
    },
    {
      id: 331,
      value: "太原理工大学现代科技学院"
    },
    {
      id: 332,
      value: "山西农业大学信息学院"
    },
    {
      id: 333,
      value: "山西师范大学现代文理学院"
    },
    {
      id: 334,
      value: "中北大学信息商务学院"
    },
    {
      id: 335,
      value: "太原科技大学华科学院"
    },
    {
      id: 336,
      value: "太原工业学院"
    },
    {
      id: 337,
      value: "辽宁大学"
    },
    {
      id: 338,
      value: "大连理工大学"
    },
    {
      id: 339,
      value: "沈阳工业大学"
    },
    {
      id: 340,
      value: "沈阳航空航天大学"
    },
    {
      id: 341,
      value: "沈阳理工大学"
    },
    {
      id: 342,
      value: "东北大学"
    },
    {
      id: 343,
      value: "辽宁科技大学"
    },
    {
      id: 344,
      value: "辽宁工程技术大学"
    },
    {
      id: 345,
      value: "辽宁石油化工大学"
    },
    {
      id: 346,
      value: "沈阳化工大学"
    },
    {
      id: 347,
      value: "大连交通大学"
    },
    {
      id: 348,
      value: "大连工业大学"
    },
    {
      id: 349,
      value: "沈阳建筑大学"
    },
    {
      id: 350,
      value: "辽宁工业大学"
    },
    {
      id: 351,
      value: "大连海洋大学"
    },
    {
      id: 352,
      value: "大连医科大学"
    },
    {
      id: 353,
      value: "辽宁师范大学"
    },
    {
      id: 354,
      value: "沈阳师范大学"
    },
    {
      id: 355,
      value: "渤海大学"
    },
    {
      id: 356,
      value: "鞍山师范学院"
    },
    {
      id: 357,
      value: "大连外国语大学"
    },
    {
      id: 358,
      value: "沈阳体育学院"
    },
    {
      id: 359,
      value: "沈阳音乐学院"
    },
    {
      id: 360,
      value: "鲁迅美术学院"
    },
    {
      id: 361,
      value: "辽宁对外经贸学院"
    },
    {
      id: 362,
      value: "沈阳大学"
    },
    {
      id: 363,
      value: "大连大学"
    },
    {
      id: 364,
      value: "辽宁科技学院"
    },
    {
      id: 365,
      value: "沈阳工程学院"
    },
    {
      id: 366,
      value: "辽东学院"
    },
    {
      id: 367,
      value: "大连民族大学"
    },
    {
      id: 368,
      value: "大连理工大学城市学院"
    },
    {
      id: 369,
      value: "沈阳工学院"
    },
    {
      id: 370,
      value: "大连工业大学艺术与信息工程学院"
    },
    {
      id: 371,
      value: "大连科技学院"
    },
    {
      id: 372,
      value: "沈阳城市建设学院"
    },
    {
      id: 373,
      value: "大连医科大学中山学院"
    },
    {
      id: 374,
      value: "辽宁师范大学海华学院"
    },
    {
      id: 375,
      value: "辽宁理工学院"
    },
    {
      id: 376,
      value: "大连财经学院"
    },
    {
      id: 377,
      value: "沈阳城市学院"
    },
    {
      id: 378,
      value: "辽宁科技大学信息技术学院"
    },
    {
      id: 379,
      value: "大连艺术学院"
    },
    {
      id: 380,
      value: "辽宁何氏医学院"
    },
    {
      id: 381,
      value: "大连东软信息学院"
    },
    {
      id: 382,
      value: "辽宁财贸学院"
    },
    {
      id: 383,
      value: "黑龙江大学"
    },
    {
      id: 384,
      value: "哈尔滨工业大学"
    },
    {
      id: 385,
      value: "哈尔滨理工大学"
    },
    {
      id: 386,
      value: "哈尔滨工程大学"
    },
    {
      id: 387,
      value: "东北石油大学"
    },
    {
      id: 388,
      value: "佳木斯大学"
    },
    {
      id: 389,
      value: "东北农业大学"
    },
    {
      id: 390,
      value: "东北林业大学"
    },
    {
      id: 391,
      value: "哈尔滨师范大学"
    },
    {
      id: 392,
      value: "齐齐哈尔大学"
    },
    {
      id: 393,
      value: "牡丹江师范学院"
    },
    {
      id: 394,
      value: "哈尔滨学院"
    },
    {
      id: 395,
      value: "大庆师范学院"
    },
    {
      id: 396,
      value: "绥化学院"
    },
    {
      id: 397,
      value: "哈尔滨商业大学"
    },
    {
      id: 398,
      value: "哈尔滨体育学院"
    },
    {
      id: 399,
      value: "黑龙江东方学院"
    },
    {
      id: 400,
      value: "黑龙江工程学院"
    },
    {
      id: 401,
      value: "黑龙江外国语学院"
    },
    {
      id: 402,
      value: "黑龙江财经学院"
    },
    {
      id: 403,
      value: "哈尔滨石油学院"
    },
    {
      id: 404,
      value: "黑龙江工商学院"
    },
    {
      id: 405,
      value: "哈尔滨远东理工学院"
    },
    {
      id: 406,
      value: "哈尔滨剑桥学院"
    },
    {
      id: 407,
      value: "黑龙江工程学院昆仑旅游学院"
    },
    {
      id: 408,
      value: "哈尔滨广厦学院"
    },
    {
      id: 409,
      value: "哈尔滨华德学院"
    },
    {
      id: 410,
      value: "黑河学院"
    },
    {
      id: 411,
      value: "吉林大学"
    },
    {
      id: 412,
      value: "延边大学"
    },
    {
      id: 413,
      value: "长春理工大学"
    },
    {
      id: 414,
      value: "东北电力大学"
    },
    {
      id: 415,
      value: "长春工业大学"
    },
    {
      id: 416,
      value: "吉林建筑大学"
    },
    {
      id: 417,
      value: "吉林农业大学"
    },
    {
      id: 418,
      value: "东北师范大学"
    },
    {
      id: 419,
      value: "北华大学"
    },
    {
      id: 420,
      value: "通化师范学院"
    },
    {
      id: 421,
      value: "吉林师范大学"
    },
    {
      id: 422,
      value: "吉林工程技术师范学院"
    },
    {
      id: 423,
      value: "长春师范大学"
    },
    {
      id: 424,
      value: "白城师范学院"
    },
    {
      id: 425,
      value: "吉林艺术学院"
    },
    {
      id: 426,
      value: "吉林工商学院"
    },
    {
      id: 427,
      value: "长春工程学院"
    },
    {
      id: 428,
      value: "长春大学"
    },
    {
      id: 429,
      value: "长春光华学院"
    },
    {
      id: 430,
      value: "长春工业大学人文信息学院"
    },
    {
      id: 431,
      value: "长春理工大学光电信息学院"
    },
    {
      id: 432,
      value: "吉林建筑大学城建学院"
    },
    {
      id: 433,
      value: "长春建筑学院"
    },
    {
      id: 434,
      value: "长春科技学院"
    },
    {
      id: 435,
      value: "吉林动画学院"
    },
    {
      id: 436,
      value: "吉林师范大学博达学院"
    },
    {
      id: 437,
      value: "长春大学旅游学院"
    },
    {
      id: 438,
      value: "东北师范大学人文学院"
    },
    {
      id: 439,
      value: "复旦大学"
    },
    {
      id: 440,
      value: "同济大学"
    },
    {
      id: 441,
      value: "上海交通大学"
    },
    {
      id: 442,
      value: "华东理工大学"
    },
    {
      id: 443,
      value: "上海理工大学"
    },
    {
      id: 444,
      value: "上海海事大学"
    },
    {
      id: 445,
      value: "东华大学"
    },
    {
      id: 446,
      value: "上海应用技术大学（原上海应用技术学院）"
    },
    {
      id: 447,
      value: "华东师范大学"
    },
    {
      id: 448,
      value: "上海师范大学"
    },
    {
      id: 449,
      value: "上海体育学院"
    },
    {
      id: 450,
      value: "上海音乐学院"
    },
    {
      id: 451,
      value: "上海戏剧学院"
    },
    {
      id: 452,
      value: "上海大学"
    },
    {
      id: 453,
      value: "上海工程技术大学"
    },
    {
      id: 454,
      value: "上海杉达学院"
    },
    {
      id: 455,
      value: "上海第二工业大学"
    },
    {
      id: 456,
      value: "上海商学院"
    },
    {
      id: 457,
      value: "上海建桥学院"
    },
    {
      id: 458,
      value: "上海视觉艺术学院"
    },
    {
      id: 459,
      value: "上海外国语大学贤达经济人文学院"
    },
    {
      id: 460,
      value: "上海师范大学天华学院"
    },
    {
      id: 461,
      value: "重庆大学"
    },
    {
      id: 462,
      value: "重庆邮电大学"
    },
    {
      id: 463,
      value: "重庆交通大学"
    },
    {
      id: 464,
      value: "西南大学"
    },
    {
      id: 465,
      value: "重庆师范大学"
    },
    {
      id: 466,
      value: "重庆文理学院"
    },
    {
      id: 467,
      value: "重庆三峡学院"
    },
    {
      id: 468,
      value: "长江师范学院"
    },
    {
      id: 469,
      value: "四川外国语大学"
    },
    {
      id: 470,
      value: "四川美术学院"
    },
    {
      id: 471,
      value: "重庆科技学院"
    },
    {
      id: 472,
      value: "重庆工商大学"
    },
    {
      id: 473,
      value: "重庆大学城市科技学院"
    },
    {
      id: 474,
      value: "重庆人文科技学院"
    },
    {
      id: 475,
      value: "四川外国语大学重庆南方翻译学院"
    },
    {
      id: 476,
      value: "重庆师范大学涉外商贸学院"
    },
    {
      id: 477,
      value: "重庆邮电大学移通学院"
    },
    {
      id: 478,
      value: "南京大学"
    },
    {
      id: 479,
      value: "苏州大学"
    },
    {
      id: 480,
      value: "东南大学"
    },
    {
      id: 481,
      value: "南京航空航天大学"
    },
    {
      id: 482,
      value: "南京理工大学"
    },
    {
      id: 483,
      value: "中国矿业大学"
    },
    {
      id: 484,
      value: "南京工业大学"
    },
    {
      id: 485,
      value: "常州大学"
    },
    {
      id: 486,
      value: "河海大学"
    },
    {
      id: 487,
      value: "江南大学"
    },
    {
      id: 488,
      value: "南京林业大学"
    },
    {
      id: 489,
      value: "江苏大学"
    },
    {
      id: 490,
      value: "南京信息工程大学"
    },
    {
      id: 491,
      value: "江苏城市职业学院"
    },
    {
      id: 492,
      value: "南通大学"
    },
    {
      id: 493,
      value: "盐城工学院"
    },
    {
      id: 494,
      value: "南京农业大学"
    },
    {
      id: 495,
      value: "南京师范大学"
    },
    {
      id: 496,
      value: "江苏师范大学（原徐州师范大学）"
    },
    {
      id: 497,
      value: "淮安大学（原淮阴师范学院）"
    },
    {
      id: 498,
      value: "盐城师范学院"
    },
    {
      id: 499,
      value: "南京财经大学"
    },
    {
      id: 500,
      value: "南京体育学院"
    },
    {
      id: 501,
      value: "南京艺术学院"
    },
    {
      id: 502,
      value: "苏州科技大学（原苏州科技学院）"
    },
    {
      id: 503,
      value: "常熟理工学院"
    },
    {
      id: 504,
      value: "金陵科技学院"
    },
    {
      id: 505,
      value: "淮安大学（原淮阴工学院）"
    },
    {
      id: 506,
      value: "徐州工程学院"
    },
    {
      id: 507,
      value: "常州工学院"
    },
    {
      id: 508,
      value: "扬州大学"
    },
    {
      id: 509,
      value: "三江学院"
    },
    {
      id: 510,
      value: "南京工程学院"
    },
    {
      id: 511,
      value: "南京晓庄学院"
    },
    {
      id: 512,
      value: "江苏理工学院"
    },
    {
      id: 513,
      value: "淮海工学院"
    },
    {
      id: 514,
      value: "东南大学成贤学院"
    },
    {
      id: 515,
      value: "无锡太湖学院"
    },
    {
      id: 516,
      value: "中国矿业大学徐海学院"
    },
    {
      id: 517,
      value: "南京大学金陵学院"
    },
    {
      id: 518,
      value: "南京航空航天大学金城学院"
    },
    {
      id: 519,
      value: "中国传媒大学南广学院"
    },
    {
      id: 520,
      value: "南京理工大学泰州科技学院"
    },
    {
      id: 521,
      value: "南京师范大学泰州学院"
    },
    {
      id: 522,
      value: "南京工业大学浦江学院"
    },
    {
      id: 523,
      value: "南京师范大学中北学院"
    },
    {
      id: 524,
      value: "苏州大学文正学院"
    },
    {
      id: 525,
      value: "苏州大学应用技术学院"
    },
    {
      id: 526,
      value: "苏州科技学院天平学院"
    },
    {
      id: 527,
      value: "江苏大学京江学院"
    },
    {
      id: 528,
      value: "扬州大学广陵学院"
    },
    {
      id: 529,
      value: "徐州师范大学科文学院"
    },
    {
      id: 530,
      value: "南通大学杏林学院"
    },
    {
      id: 531,
      value: "南昌大学"
    },
    {
      id: 532,
      value: "华东交通大学"
    },
    {
      id: 533,
      value: "东华理工大学"
    },
    {
      id: 534,
      value: "南昌航空大学"
    },
    {
      id: 535,
      value: "江西理工大学"
    },
    {
      id: 536,
      value: "景德镇陶瓷大学"
    },
    {
      id: 537,
      value: "江西农业大学"
    },
    {
      id: 538,
      value: "江西中医学院"
    },
    {
      id: 539,
      value: "江西师范大学"
    },
    {
      id: 540,
      value: "上饶师范学院"
    },
    {
      id: 541,
      value: "宜春学院"
    },
    {
      id: 542,
      value: "赣南师范大学"
    },
    {
      id: 543,
      value: "井冈山大学"
    },
    {
      id: 544,
      value: "江西财经大学"
    },
    {
      id: 545,
      value: "江西科技学院"
    },
    {
      id: 546,
      value: "江西科技师范大学"
    },
    {
      id: 547,
      value: "南昌工程学院"
    },
    {
      id: 548,
      value: "新余学院"
    },
    {
      id: 549,
      value: "九江学院"
    },
    {
      id: 550,
      value: "南昌理工学院"
    },
    {
      id: 551,
      value: "江西服装学院"
    },
    {
      id: 552,
      value: "南昌工学院"
    },
    {
      id: 553,
      value: "南昌大学科学技术学院"
    },
    {
      id: 554,
      value: "南昌大学共青学院"
    },
    {
      id: 555,
      value: "华东交通大学理工学院"
    },
    {
      id: 556,
      value: "南昌航空大学科技学院"
    },
    {
      id: 557,
      value: "江西理工大学应用科学学院"
    },
    {
      id: 558,
      value: "景德镇陶瓷学院科技艺术学院"
    },
    {
      id: 559,
      value: "江西农业大学南昌商学院"
    },
    {
      id: 560,
      value: "江西中医药大学科技学院"
    },
    {
      id: 561,
      value: "江西师范大学科学技术学院"
    },
    {
      id: 562,
      value: "赣南师范学院科技学院"
    },
    {
      id: 563,
      value: "江西科技师范学院理工学院"
    },
    {
      id: 564,
      value: "南昌师范学院"
    },
    {
      id: 565,
      value: "武汉大学"
    },
    {
      id: 566,
      value: "华中科技大学"
    },
    {
      id: 567,
      value: "武汉科技大学"
    },
    {
      id: 568,
      value: "长江大学"
    },
    {
      id: 569,
      value: "武汉工程大学"
    },
    {
      id: 570,
      value: "中国地质大学(武汉)"
    },
    {
      id: 571,
      value: "武汉纺织大学"
    },
    {
      id: 572,
      value: "武汉工业学院"
    },
    {
      id: 573,
      value: "武汉理工大学"
    },
    {
      id: 574,
      value: "湖北工业大学"
    },
    {
      id: 575,
      value: "华中农业大学"
    },
    {
      id: 576,
      value: "华中师范大学"
    },
    {
      id: 577,
      value: "湖北大学"
    },
    {
      id: 578,
      value: "湖北师范大学"
    },
    {
      id: 579,
      value: "黄冈师范学院"
    },
    {
      id: 580,
      value: "湖北民族学院"
    },
    {
      id: 581,
      value: "中南财经政法大学"
    },
    {
      id: 582,
      value: "武汉体育学院"
    },
    {
      id: 583,
      value: "湖北美术学院"
    },
    {
      id: 584,
      value: "中南民族大学"
    },
    {
      id: 585,
      value: "湖北汽车工业学院"
    },
    {
      id: 586,
      value: "湖北工程学院"
    },
    {
      id: 587,
      value: "湖北理工学院"
    },
    {
      id: 588,
      value: "湖北科技学院"
    },
    {
      id: 589,
      value: "江汉大学"
    },
    {
      id: 590,
      value: "三峡大学"
    },
    {
      id: 591,
      value: "荆楚理工学院"
    },
    {
      id: 592,
      value: "武汉音乐学院"
    },
    {
      id: 593,
      value: "湖北经济学院"
    },
    {
      id: 594,
      value: "武汉东湖学院"
    },
    {
      id: 595,
      value: "汉口学院"
    },
    {
      id: 596,
      value: "武昌首义学院"
    },
    {
      id: 597,
      value: "武昌理工学院"
    },
    {
      id: 598,
      value: "武汉生物工程学院"
    },
    {
      id: 599,
      value: "武汉大学珞珈学院"
    },
    {
      id: 600,
      value: "湖北大学知行学院"
    },
    {
      id: 601,
      value: "武汉科技大学城市学院"
    },
    {
      id: 602,
      value: "三峡大学科技学院"
    },
    {
      id: 603,
      value: "江汉大学文理学院"
    },
    {
      id: 604,
      value: "湖北工业大学工程技术学院"
    },
    {
      id: 605,
      value: "武汉工程大学邮电与信息工程学院"
    },
    {
      id: 606,
      value: "武汉纺织大学外经贸学院"
    },
    {
      id: 607,
      value: "武昌工学院"
    },
    {
      id: 608,
      value: "武汉长江工商学院"
    },
    {
      id: 609,
      value: "长江大学文理学院"
    },
    {
      id: 610,
      value: "湖北商贸学院"
    },
    {
      id: 611,
      value: "湖北汽车工业学院科技学院"
    },
    {
      id: 612,
      value: "湖北民族学院科技学院"
    },
    {
      id: 613,
      value: "湖北经济学院法商学院"
    },
    {
      id: 614,
      value: "武汉体育学院体育科技学院"
    },
    {
      id: 615,
      value: "湖北师范学院文理学院"
    },
    {
      id: 616,
      value: "湖北文理学院理工学院"
    },
    {
      id: 617,
      value: "湖北工程学院新技术学院"
    },
    {
      id: 618,
      value: "文华学院"
    },
    {
      id: 619,
      value: "中南财经政法大学武汉学院"
    },
    {
      id: 620,
      value: "武汉工程科技学院"
    },
    {
      id: 621,
      value: "武汉理工大学华夏学院"
    },
    {
      id: 622,
      value: "华中师范大学武汉传媒学院"
    },
    {
      id: 623,
      value: "华中农业大学楚天学院"
    },
    {
      id: 624,
      value: "湖北第二师范学院"
    },
    {
      id: 625,
      value: "湘潭大学"
    },
    {
      id: 626,
      value: "吉首大学"
    },
    {
      id: 627,
      value: "湖南大学"
    },
    {
      id: 628,
      value: "中南大学"
    },
    {
      id: 629,
      value: "湖南科技大学"
    },
    {
      id: 630,
      value: "长沙理工大学"
    },
    {
      id: 631,
      value: "湖南农业大学"
    },
    {
      id: 632,
      value: "中南林业科技大学"
    },
    {
      id: 633,
      value: "湖南师范大学"
    },
    {
      id: 634,
      value: "湖南理工学院"
    },
    {
      id: 635,
      value: "湘南学院"
    },
    {
      id: 636,
      value: "衡阳师范学院"
    },
    {
      id: 637,
      value: "邵阳学院"
    },
    {
      id: 638,
      value: "怀化学院"
    },
    {
      id: 639,
      value: "湖南文理学院"
    },
    {
      id: 640,
      value: "湖南科技学院"
    },
    {
      id: 641,
      value: "湖南人文科技学院"
    },
    {
      id: 642,
      value: "湖南商学院"
    },
    {
      id: 643,
      value: "南华大学"
    },
    {
      id: 644,
      value: "长沙学院"
    },
    {
      id: 645,
      value: "湖南工程学院"
    },
    {
      id: 646,
      value: "湖南城市学院"
    },
    {
      id: 647,
      value: "湖南工业大学"
    },
    {
      id: 648,
      value: "湖南女子学院"
    },
    {
      id: 649,
      value: "湖南第一师范学院"
    },
    {
      id: 650,
      value: "湖南涉外经济学院"
    },
    {
      id: 651,
      value: "湘潭大学兴湘学院"
    },
    {
      id: 652,
      value: "湖南工业大学科技学院"
    },
    {
      id: 653,
      value: "湖南科技大学潇湘学院"
    },
    {
      id: 654,
      value: "南华大学船山学院"
    },
    {
      id: 655,
      value: "湖南商学院北津学院"
    },
    {
      id: 656,
      value: "湖南师范大学树达学院"
    },
    {
      id: 657,
      value: "湖南农业大学东方科技学院"
    },
    {
      id: 658,
      value: "中南林业科技大学涉外学院"
    },
    {
      id: 659,
      value: "湖南文理学院芙蓉学院"
    },
    {
      id: 660,
      value: "湖南理工学院南湖学院"
    },
    {
      id: 661,
      value: "衡阳师范学院南岳学院"
    },
    {
      id: 662,
      value: "湖南工程学院应用技术学院"
    },
    {
      id: 663,
      value: "吉首大学张家界学院"
    },
    {
      id: 664,
      value: "长沙理工大学城南学院"
    },
    {
      id: 665,
      value: "中山大学"
    },
    {
      id: 666,
      value: "暨南大学"
    },
    {
      id: 667,
      value: "汕头大学"
    },
    {
      id: 668,
      value: "华南理工大学"
    },
    {
      id: 669,
      value: "华南农业大学"
    },
    {
      id: 670,
      value: "广东海洋大学"
    },
    {
      id: 671,
      value: "华南师范大学"
    },
    {
      id: 672,
      value: "韶关学院"
    },
    {
      id: 673,
      value: "惠州学院"
    },
    {
      id: 674,
      value: "韩山师范学院"
    },
    {
      id: 675,
      value: "岭南师范学院"
    },
    {
      id: 676,
      value: "肇庆学院"
    },
    {
      id: 677,
      value: "嘉应学院"
    },
    {
      id: 678,
      value: "广州体育学院"
    },
    {
      id: 679,
      value: "广州美术学院"
    },
    {
      id: 680,
      value: "星海音乐学院"
    },
    {
      id: 681,
      value: "广东技术师范学院"
    },
    {
      id: 682,
      value: "深圳大学"
    },
    {
      id: 683,
      value: "广东财经大学"
    },
    {
      id: 684,
      value: "广东白云学院"
    },
    {
      id: 685,
      value: "广州大学"
    },
    {
      id: 686,
      value: "仲恺农业工程学院"
    },
    {
      id: 687,
      value: "五邑大学"
    },
    {
      id: 688,
      value: "电子科技大学中山学院"
    },
    {
      id: 689,
      value: "广东石油化工学院"
    },
    {
      id: 690,
      value: "东莞理工学院"
    },
    {
      id: 691,
      value: "广东工业大学"
    },
    {
      id: 692,
      value: "广东外语外贸大学"
    },
    {
      id: 693,
      value: "佛山科学技术学院"
    },
    {
      id: 694,
      value: "广东培正学院"
    },
    {
      id: 695,
      value: "华南理工大学广州汽车学院"
    },
    {
      id: 696,
      value: "广州大学华软软件学院"
    },
    {
      id: 697,
      value: "中山大学南方学院"
    },
    {
      id: 698,
      value: "广东外语外贸大学南国商学院"
    },
    {
      id: 699,
      value: "广东商学院华商学院"
    },
    {
      id: 700,
      value: "广东海洋大学寸金学院"
    },
    {
      id: 701,
      value: "华南农业大学珠江学院"
    },
    {
      id: 702,
      value: "广东技术师范学院天河学院"
    },
    {
      id: 703,
      value: "北京师范大学珠海分校"
    },
    {
      id: 704,
      value: "广东工业大学华立学院"
    },
    {
      id: 705,
      value: "广州大学松田学院"
    },
    {
      id: 706,
      value: "广州商学院"
    },
    {
      id: 707,
      value: "北京理工大学珠海学院"
    },
    {
      id: 708,
      value: "吉林大学珠海学院"
    },
    {
      id: 709,
      value: "东莞理工学院城市学院"
    },
    {
      id: 710,
      value: "中山大学新华学院"
    },
    {
      id: 711,
      value: "广东第二师范学院"
    },
    {
      id: 712,
      value: "北京师范大学-香港浸会大学联合国际学院"
    },
    {
      id: 713,
      value: "广西大学"
    },
    {
      id: 714,
      value: "广西科技大学"
    },
    {
      id: 715,
      value: "桂林电子科技大学"
    },
    {
      id: 716,
      value: "桂林理工大学"
    },
    {
      id: 717,
      value: "广西师范大学"
    },
    {
      id: 718,
      value: "广西师范学院"
    },
    {
      id: 719,
      value: "广西民族师范学院"
    },
    {
      id: 720,
      value: "河池学院"
    },
    {
      id: 721,
      value: "玉林师范学院"
    },
    {
      id: 722,
      value: "广西艺术学院"
    },
    {
      id: 723,
      value: "广西民族大学"
    },
    {
      id: 724,
      value: "百色学院"
    },
    {
      id: 725,
      value: "梧州学院"
    },
    {
      id: 726,
      value: "广西财经学院"
    },
    {
      id: 727,
      value: "钦州学院"
    },
    {
      id: 728,
      value: "贺州学院"
    },
    {
      id: 729,
      value: "广西大学行健文理学院"
    },
    {
      id: 730,
      value: "广西科技大学鹿山学院"
    },
    {
      id: 731,
      value: "广西民族大学相思湖学院"
    },
    {
      id: 732,
      value: "广西师范大学漓江学院"
    },
    {
      id: 733,
      value: "广西师范学院师园学院"
    },
    {
      id: 734,
      value: "桂林电子科技大学信息科技学院"
    },
    {
      id: 735,
      value: "北京航空航天大学北海学院"
    },
    {
      id: 736,
      value: "贵州大学"
    },
    {
      id: 737,
      value: "贵州师范大学"
    },
    {
      id: 738,
      value: "遵义师范学院"
    },
    {
      id: 739,
      value: "铜仁学院"
    },
    {
      id: 740,
      value: "兴义民族师范学院"
    },
    {
      id: 741,
      value: "安顺学院"
    },
    {
      id: 742,
      value: "贵州工程应用技术学院"
    },
    {
      id: 743,
      value: "凯里学院"
    },
    {
      id: 744,
      value: "黔南民族师范学院"
    },
    {
      id: 745,
      value: "贵州财经大学"
    },
    {
      id: 746,
      value: "贵州民族大学"
    },
    {
      id: 747,
      value: "贵阳学院"
    },
    {
      id: 748,
      value: "六盘水师范学院"
    },
    {
      id: 749,
      value: "贵州财经大学商务学院"
    },
    {
      id: 750,
      value: "贵州大学科技学院"
    },
    {
      id: 751,
      value: "贵州大学明德学院"
    },
    {
      id: 752,
      value: "贵州民族学院人文科技学院"
    },
    {
      id: 753,
      value: "贵州师范大学求是学院"
    },
    {
      id: 754,
      value: "贵州师范学院"
    },
    {
      id: 755,
      value: "湖北文理学院"
    },
    {
      id: 756,
      value: "海南大学"
    },
    {
      id: 757,
      value: "琼州学院"
    },
    {
      id: 758,
      value: "海南师范大学"
    },
    {
      id: 759,
      value: "海口经济学院"
    },
    {
      id: 760,
      value: "三亚学院"
    },
    {
      id: 761,
      value: "厦门大学"
    },
    {
      id: 762,
      value: "华侨大学"
    },
    {
      id: 763,
      value: "福州大学"
    },
    {
      id: 764,
      value: "福建工程学院"
    },
    {
      id: 765,
      value: "福建农林大学"
    },
    {
      id: 766,
      value: "集美大学"
    },
    {
      id: 767,
      value: "福建师范大学"
    },
    {
      id: 768,
      value: "闽江学院"
    },
    {
      id: 769,
      value: "武夷学院"
    },
    {
      id: 770,
      value: "泉州师范学院"
    },
    {
      id: 771,
      value: "闽南师范大学"
    },
    {
      id: 772,
      value: "厦门理工学院"
    },
    {
      id: 773,
      value: "三明学院"
    },
    {
      id: 774,
      value: "龙岩学院"
    },
    {
      id: 775,
      value: "莆田学院"
    },
    {
      id: 776,
      value: "福建农林大学东方学院"
    },
    {
      id: 777,
      value: "阳光学院"
    },
    {
      id: 778,
      value: "厦门大学嘉庚学院"
    },
    {
      id: 779,
      value: "福州大学至诚学院"
    },
    {
      id: 780,
      value: "集美大学诚毅学院"
    },
    {
      id: 781,
      value: "福建师范大学协和学院"
    },
    {
      id: 782,
      value: "福州外语外贸学院"
    },
    {
      id: 783,
      value: "福建农林大学金山学院"
    },
    {
      id: 784,
      value: "四川大学"
    },
    {
      id: 785,
      value: "西南交通大学"
    },
    {
      id: 786,
      value: "电子科技大学"
    },
    {
      id: 787,
      value: "西南石油大学"
    },
    {
      id: 788,
      value: "成都理工大学"
    },
    {
      id: 789,
      value: "西南科技大学"
    },
    {
      id: 790,
      value: "成都信息工程大学"
    },
    {
      id: 791,
      value: "四川理工学院"
    },
    {
      id: 792,
      value: "西华大学"
    },
    {
      id: 793,
      value: "四川农业大学"
    },
    {
      id: 794,
      value: "西昌学院"
    },
    {
      id: 795,
      value: "四川师范大学"
    },
    {
      id: 796,
      value: "西华师范大学"
    },
    {
      id: 797,
      value: "绵阳师范学院"
    },
    {
      id: 798,
      value: "内江师范学院"
    },
    {
      id: 799,
      value: "宜宾学院"
    },
    {
      id: 800,
      value: "四川文理学院"
    },
    {
      id: 801,
      value: "乐山师范学院"
    },
    {
      id: 802,
      value: "成都体育学院"
    },
    {
      id: 803,
      value: "四川音乐学院"
    },
    {
      id: 804,
      value: "西南民族大学"
    },
    {
      id: 805,
      value: "成都学院"
    },
    {
      id: 806,
      value: "攀枝花学院"
    },
    {
      id: 807,
      value: "四川民族学院"
    },
    {
      id: 808,
      value: "成都东软学院"
    },
    {
      id: 809,
      value: "电子科技大学成都学院"
    },
    {
      id: 810,
      value: "成都理工大学工程技术学院"
    },
    {
      id: 811,
      value: "四川传媒学院"
    },
    {
      id: 812,
      value: "成都信息工程学院银杏酒店管理学院"
    },
    {
      id: 813,
      value: "成都文理学院"
    },
    {
      id: 814,
      value: "四川工商学院"
    },
    {
      id: 815,
      value: "四川大学锦城学院"
    },
    {
      id: 816,
      value: "西南财经大学天府学院"
    },
    {
      id: 817,
      value: "四川大学锦江学院"
    },
    {
      id: 818,
      value: "四川文化艺术学院"
    },
    {
      id: 819,
      value: "云南大学"
    },
    {
      id: 820,
      value: "昆明理工大学"
    },
    {
      id: 821,
      value: "西南林业大学"
    },
    {
      id: 822,
      value: "大理大学（原大理学院）"
    },
    {
      id: 823,
      value: "云南师范大学"
    },
    {
      id: 824,
      value: "曲靖师范学院"
    },
    {
      id: 825,
      value: "保山学院"
    },
    {
      id: 826,
      value: "红河学院"
    },
    {
      id: 827,
      value: "云南财经大学"
    },
    {
      id: 828,
      value: "云南艺术学院"
    },
    {
      id: 829,
      value: "云南民族大学"
    },
    {
      id: 830,
      value: "玉溪师范学院"
    },
    {
      id: 831,
      value: "楚雄师范学院"
    },
    {
      id: 832,
      value: "昆明学院"
    },
    {
      id: 833,
      value: "文山学院"
    },
    {
      id: 834,
      value: "云南大学滇池学院"
    },
    {
      id: 835,
      value: "云南大学旅游文化学院"
    },
    {
      id: 836,
      value: "云南师范大学商学院"
    },
    {
      id: 837,
      value: "云南艺术学院文华学院"
    },
    {
      id: 838,
      value: "云南师范大学文理学院"
    },
    {
      id: 839,
      value: "云南工商学院"
    },
    {
      id: 840,
      value: "内蒙古大学"
    },
    {
      id: 841,
      value: "内蒙古科技大学"
    },
    {
      id: 842,
      value: "内蒙古工业大学"
    },
    {
      id: 843,
      value: "内蒙古农业大学"
    },
    {
      id: 844,
      value: "内蒙古师范大学"
    },
    {
      id: 845,
      value: "内蒙古民族大学"
    },
    {
      id: 846,
      value: "赤峰学院"
    },
    {
      id: 847,
      value: "呼伦贝尔学院"
    },
    {
      id: 848,
      value: "集宁师范学院"
    },
    {
      id: 849,
      value: "呼和浩特民族学院"
    },
    {
      id: 850,
      value: "内蒙古大学创业学院"
    },
    {
      id: 851,
      value: "内蒙古师范大学鸿德学院"
    },
    {
      id: 852,
      value: "内蒙古科技大学包头师范学院"
    },
    {
      id: 853,
      value: "兰州大学"
    },
    {
      id: 854,
      value: "兰州理工大学"
    },
    {
      id: 855,
      value: "兰州交通大学"
    },
    {
      id: 856,
      value: "西北师范大学"
    },
    {
      id: 857,
      value: "兰州城市学院"
    },
    {
      id: 858,
      value: "陇东学院"
    },
    {
      id: 859,
      value: "天水师范学院"
    },
    {
      id: 860,
      value: "河西学院"
    },
    {
      id: 861,
      value: "兰州财经大学"
    },
    {
      id: 862,
      value: "西北民族大学"
    },
    {
      id: 863,
      value: "甘肃政法学院"
    },
    {
      id: 864,
      value: "甘肃民族师范学院"
    },
    {
      id: 865,
      value: "西北师范大学知行学院"
    },
    {
      id: 866,
      value: "兰州商学院陇桥学院"
    },
    {
      id: 867,
      value: "兰州财经大学长青学院"
    },
    {
      id: 868,
      value: "宁夏大学"
    },
    {
      id: 869,
      value: "宁夏师范学院"
    },
    {
      id: 870,
      value: "北方民族大学"
    },
    {
      id: 871,
      value: "宁夏大学新华学院"
    },
    {
      id: 872,
      value: "青海师范大学"
    },
    {
      id: 873,
      value: "青海民族大学"
    },
    {
      id: 874,
      value: "新疆大学"
    },
    {
      id: 875,
      value: "石河子大学"
    },
    {
      id: 876,
      value: "新疆师范大学"
    },
    {
      id: 877,
      value: "喀什大学"
    },
    {
      id: 878,
      value: "伊犁师范学院"
    },
    {
      id: 879,
      value: "新疆艺术学院"
    },
    {
      id: 880,
      value: "昌吉学院"
    },
    {
      id: 881,
      value: "西藏大学"
    }
  ]
  var data = new Array
  if (key == undefined) {
    var data = college;
  } else {
    for (let i = 0; i < college.length; i++) {
      if (college[i].value.indexOf(key) != -1) {
        data.push(college[i])
      }
    }
  }
  return data
}
module.exports = {
  classify: classifyData,
  cityData: cityData,
  school: collegeData
};
