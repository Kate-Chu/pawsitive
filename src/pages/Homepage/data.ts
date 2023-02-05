const data = [
  {
    tag: 'taipei_city',
    place: '臺北市',
    areaPkid: 2,
    shelters: {
      臺北市動物之家: 49,
    },
  },
  {
    tag: 'new_taipei_city',
    place: '新北市',
    areaPkid: 3,
    shelters: {
      新北市板橋區公立動物之家: 50,
      新北市新店區公立動物之家: 51,
      新北市中和區公立動物之家: 53,
      新北市淡水區公立動物之家: 55,
      新北市瑞芳區公立動物之家: 56,
      新北市五股區公立動物之家: 58,
      新北市八里區公立動物之家: 59,
      新北市三芝區公立動物之家: 60,
      新北市政府動物保護防疫處: 92,
    },
  },
  {
    tag: 'taichung_city',
    place: '台中市',
    areaPkid: 10,
    shelters: {
      臺中市動物之家南屯園區: 67,
      臺中市動物之家后里園區: 68,
    },
  },
  {
    tag: 'tainan_city',
    place: '臺南市',
    areaPkid: 16,
    shelters: {
      臺南市動物之家灣裡站: 73,
      臺南市動物之家善化站: 74,
    },
  },
  {
    tag: 'kaohsiung_city',
    place: '高雄市',
    areaPkid: 17,
    shelters: {
      高雄市壽山動物保護教育園區: 75,
      高雄市燕巢動物保護關愛園區: 76,
    },
  },
  {
    tag: 'keelung_city',
    place: '基隆市',
    areaPkid: 4,
    shelters: {
      基隆市寵物銀行: 48,
    },
  },
  {
    tag: 'taoyuan_country',
    place: '桃園市',
    areaPkid: 6,
    shelters: {
      桃園市動物保護教育園區: 61,
    },
  },
  {
    tag: 'hsinchu_city',
    place: '新竹市',
    areaPkid: 8,
    shelters: {
      新竹市動物收容所: 62,
    },
  },
  {
    tag: 'hsinchu_country',
    place: '新竹縣',
    areaPkid: 7,
    shelters: {
      新竹縣動物收容所: 63,
    },
  },
  {
    tag: 'miaoli_country',
    place: '苗栗縣',
    areaPkid: 9,
    shelters: {
      苗栗縣生態保育教育中心: 96,
    },
  },
  {
    tag: 'changhua_country',
    place: '彰化縣',
    areaPkid: 11,
    shelters: {
      彰化縣流浪狗中途之家: 69,
    },
  },
  {
    tag: 'nantou_country',
    place: '南投縣',
    areaPkid: 12,
    shelters: {
      南投縣公立動物收容所: 70,
    },
  },
  {
    tag: 'yunlin_country',
    place: '雲林縣',
    areaPkid: 13,
    shelters: {
      雲林縣流浪動物收容所: 89,
    },
  },
  {
    tag: 'chiayi_city',
    place: '嘉義市',
    areaPkid: 15,
    shelters: {
      嘉義市流浪犬收容中心: 71,
    },
  },
  {
    tag: 'chiayi_country',
    place: '嘉義縣',
    areaPkid: 14,
    shelters: {
      嘉義縣流浪犬中途之家: 72,
    },
  },
  {
    tag: 'pingtung_country',
    place: '屏東縣',
    areaPkid: 18,
    shelters: {
      屏東縣流浪動物收容所: 77,
    },
  },
  {
    tag: 'yilan_country',
    place: '宜蘭縣',
    areaPkid: 5,
    shelters: {
      宜蘭縣流浪動物中途之家: 78,
    },
  },
  {
    tag: 'hualien_country',
    place: '花蓮縣',
    areaPkid: 19,
    shelters: {
      花蓮縣流浪犬中途之家: 79,
    },
  },
  {
    tag: 'taitung_country',
    place: '台東縣',
    areaPkid: 20,
    shelters: {
      臺東縣動物收容中心: 80,
    },
  },
  {
    tag: 'penghu_country',
    place: '澎湖縣',
    areaPkid: 21,
    shelters: {
      澎湖縣流浪動物收容中心: 83,
    },
  },
  {
    tag: 'kinmen_country',
    place: '金門縣',
    areaPkid: 22,
    shelters: {
      金門縣動物收容中心: 82,
    },
  },
  {
    tag: 'lienchiang_country',
    place: '連江縣',
    areaPkid: 23,
    shelters: {
      連江縣流浪犬收容中心: 81,
    },
  },
];

const placeData = new Map();

data.forEach((item) => {
  placeData.set(item.tag, {
    place: item.place,
    engPlace: item.tag,
    areaPkid: item.areaPkid,
    shelters: item.shelters,
  });
});

export default placeData;
