# GitHub Copilot Stats Extension

This Visual Studio Code extension tracks and displays statistics about your usage of GitHub Copilot suggestions and the time spent in each project folder. It counts the number of Copilot suggestions, the total number of words added using Copilot, and logs the time spent in the currently active folder. Please note that this extension doesn't directly count suggestions from GitHub Copilot as there is no official API or function for production use yet. Therefore, stats may vary slightly.

## Installation

1. Open Visual Studio Code.
2. Navigate to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. Search for "GitHub Copilot Stats" and install it.
4. You might need to reload Visual Studio Code after the installation.

## Usage

1. After installation, you will be prompted to enter your API Key. This key is necessary for authenticating with the remote server where your stats are stored.
2. If you don't have an API Key, you can obtain it [here](https://betimes-social-listening-app.demotoday.net).
3. Once the API Key is entered, the extension will start tracking your Copilot suggestions and time spent in each folder automatically.

### Commands

- `GitHub Copilot Stats: Set API Key`: Allows you to set or update your API Key.

## Features

- Counts the number of Copilot suggestions you've used.
- Tracks the total number of words added using Copilot.
- Logs the time spent in each project folder.
- Provides a status bar item showing the current count of Copilot suggestions and word count.
- Stores time tracking data for each folder you work in, which can be sent to a configured server for analysis.

## Change Log

### Version 1.2.5
- Improved stability and performance in data handling and API integration.

### Version 1.2.4
- **New Feature**: Added time tracking functionality to log time spent in each project folder.
- **Enhancement**: Automatic data sending feature implemented for time tracking data.
- **Improvement**: Stability and performance enhancements in data handling and API integration.

### Version 1.1.4
- Previous stable release.

## Contributing

Feedback and contributions are welcome. Please open an issue or pull request on our [GitHub repository](https://github.com/akkawit666/copilot-statistics.git).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

📊 # คำนวณและเปรียบเทียบค่าเฉลี่ย 280,000 คำต่อเดือน

## สูตรคำนวณ

1. **จำนวนคำที่โปรแกรมเมอร์แต่ละคนสร้างได้ต่อวัน**:
   คำต่อวัน = TEXT COUNT / วันทำงาน

2. **จำนวนคำที่โปรแกรมเมอร์สร้างได้ต่อเดือน (20 วันทำงาน)**:
   คำต่อเดือน = คำต่อวัน × 20

3. **คำนวณเปอร์เซ็นต์ของค่าเฉลี่ย 280,000 คำ**:
   เปอร์เซ็นต์ที่ทำได้ = (คำต่อเดือน / 280,000) × 100


## ตัวอย่างการคำนวณสำหรับนาย A

- **นาย A: เอกวิทย์ ตาแฮ (บอล)**
- TEXT COUNT: 2,135,679 คำ
- วันทำงาน: 13 วัน
- คำต่อวัน: 2,135,679 / 13 ≈ 164,283 คำ/วัน
- คำต่อเดือน: 164,283 × 20 = 3,285,660 คำ/เดือน
- เปอร์เซ็นต์ที่ทำได้: (3,285,660 / 280,000) × 100 ≈ 1173.45%

## คำนวณสำหรับทุกคน

| ลำดับ | DISPLAY NAME | UID | วันทำงาน (วัน) | TEXT COUNT | คำต่อวัน | คำต่อเดือน | เปอร์เซ็นต์ที่ทำได้ (%) |
|-------|---------------|-----|-----------------|------------|-----------|--------------|----------------------------|
| 1 | เอกวิทย์ ตาแฮ (บอล) | cvp5qRumrzfWWsBd0AM0ikDeduu1 | 13 | 2,135,679 | 164,283 | 3,285,660 | 1173.45 |
| 2 | ณฐพงศ์ ทองคำรอด (ไอซ์) | MDMWkkGJC5XJLZLm3Vvq5KkAinr1 | 14.5 | 759,219 | 52,390 | 1,047,800 | 374.93 |
| 3 | ขันติพงศ์ ดำขำ (เบียร์) | RlFrZhUibbcx22xusVHrGEQDHW23 | 13 | 132,778 | 10,214 | 204,280 | 72.24 |
| 4 | วสุทร เลิงลำ (ต่อ) | feINx9E2LcOp0c55eGZCCp7vYC02 | 17 | 127,197 | 7,482 | 149,640 | 53.44 |
| 5 | ประสงค์ เกษแก้ว (โอ๊ต) | ouFaEKYFP4cbpGzkVuZ8CEgi5IO2 | 17 | 114,572 | 6,739 | 134,780 | 48.14 |
| 6 | ชินดนัย มั่นมา (โป้ง) | a1mGZMsNRRTApO2WC4R6GO6hs0C2 | 17 | 106,629 | 6,272 | 125,440 | 44.80 |
| 7 | ธนกฤษ สุทา (แท็ก) | kgM7pEOtEdaNRCNKpBjVpZzunJq2 | 15 | 103,008 | 6,867 | 137,340 | 49.05 |
| 8 | ชาคริต แอสบิลลี่ (บิลลี่) | FeS54ejxWhcQI1QXNuavfN7tdmg2 | 17 | 81,633 | 4,802 | 96,040 | 34.30 |
| 9 | วิทวัส ศรีชุม (บิ๊ก) | zbCcWchygXYDZGIlL8amZPrUUl52 | 15 | 81,250 | 5,417 | 108,340 | 38.69 |
| 10 | อุเทน มั่งมูล (แม็กนั่ม) | kzh8wy6u4GScPeKslSSP1lpkHUi2 | 14.5 | 77,330 | 5,334 | 106,680 | 38.10 |
| 11 | อาทิตย์ แดงสะอาด (ตู่) | 7TSIo3EzvkPrA9gXYQXi9ivQYbp2 | 14 | 68,668 | 4,905 | 98,100 | 35.04 |
| 12 | จิรพัฒน์ ตะโพธิ์ (ตัส) | 5ovUGrrRw2cgKBICDtXx8rHNHh63 | 17 | 65,596 | 3,859 | 77,180 | 27.56 |
| 13 | นนท์ธรัตน์ ทาลา (ฟิวส์) | ttWDOOaD8QW9lTtFvGdSxoWALe22 | 17 | 63,941 | 3,761 | 75,220 | 26.86 |
| 14 | จีรพันธ์ รอดสุโข (ติ้ง) | 5GloV21ZBfeuM33PIbw795PJNLi1 | 15 | 53,403 | 3,561 | 71,220 | 25.44 |
| 15 | สิทธิพงษ์ ครอบครอง (เฟม) | xIdIVB9ZZAUhejwEmWEKWxTlJjt1 | 15 | 51,232 | 3,415 | 68,300 | 24.39 |
| 16 | ธีร์วิสิทธิ์ ภูมิจันทร์ (เครน) | a7GTWYOwUQMdEiLs9ficqe3BtA43 | 15 | 46,061 | 3,071 | 61,420 | 21.94 |
| 17 | ภัครพล อมรกุล (ปังปอนด์) | zCHgDdKSVTTzXTrdFnlIbNNXAEH2 | 17 | 43,334 | 2,549 | 50,980 | 18.21 |
| 18 | นนทชัย อุ่นทุม (โต๋) | wtOz4cyHeVWVXspUUAf6FQegVPR2 | 18 | 33,908 | 1,884 | 37,680 | 13.46 |
| 19 | อัมรินทร์ นาคประกอบ (เอฟ) | 8sGcA2dO1VNIFjQAS7t6rCkyTim2 | 16 | 24,060 | 1,504 | 30,080 | 10.74 |
| 20 | วราเทพ แสงสุวรรณ (ดิน) | kW6aQnKBZ8NBTjFer5UiIDITLyu1 | 18 | 14,642 | 814 | 16,280 | 5.81 |
| 21 | จิรศักดิ์ เหมือดสุรินทร์ (เม้ง) | Y01KJ4oGA3afHOLoZbeZI4pqSuO2 | 16 | 11,313 | 707 | 14,140 | 5.05 |
| 22 | เจฟฟรี่ แฟงเคาเซอร์ (เจฟ) | 0qa0QsGu2zfsn6oqym9xYoWczIs2 | 17 | 793 | 47 | 940 | 0.34 |

## สรุป
โปรแกรมเมอร์แต่ละคนสามารถสร้างคำได้ถึง 280,000 คำต่อเดือนกี่เปอร์เซ็นต์ คำตอบจะบอกได้ว่าใครสามารถสร้างคำได้มากที่สุดและมีประสิทธิภาพที่สุดในการใช้ Copilot ในงาน



