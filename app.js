const defaultData = {
    hiragana: [
        {
            kana: 'あ',
            eng: 'a',
            kor: '아',
            words: [
                { t: 'あさ', e: 'asa', k: '아침' },
                { t: 'あめ', e: 'ame', k: '비' },
                { t: 'あおい', e: 'aoi', k: '파란색' },
            ],
        },
        {
            kana: 'い',
            eng: 'i',
            kor: '이',
            words: [
                { t: 'いぬ', e: 'inu', k: '개' },
                { t: 'いえ', e: 'ie', k: '집' },
                { t: 'いち', e: 'ichi', k: '1' },
            ],
        },
        {
            kana: 'う',
            eng: 'u',
            kor: '우',
            words: [
                { t: 'うみ', e: 'umi', k: '바다' },
                { t: 'うた', e: 'uta', k: '노래' },
                { t: 'うしろ', e: 'ushiro', k: '뒤' },
            ],
        },
        {
            kana: 'え',
            eng: 'e',
            kor: '에',
            words: [
                { t: 'えき', e: 'eki', k: '역' },
                { t: 'えがお', e: 'egao', k: '웃는 얼굴' },
                { t: 'えだ', e: 'eda', k: '가지' },
            ],
        },
        {
            kana: 'お',
            eng: 'o',
            kor: '오',
            words: [
                { t: 'おとこ', e: 'otoko', k: '남자' },
                { t: 'おんな', e: 'onna', k: '여자' },
                { t: 'おいしい', e: 'oishii', k: '맛있다' },
            ],
        },
        {
            kana: 'か',
            eng: 'ka',
            kor: '카',
            words: [
                { t: 'かお', e: 'kao', k: '얼굴' },
                { t: 'かさ', e: 'kasa', k: '우산' },
                { t: 'からい', e: 'karai', k: '맵다' },
            ],
        },
        {
            kana: 'き',
            eng: 'ki',
            kor: '키',
            words: [
                { t: 'き', e: 'ki', k: '나무' },
                { t: 'きいろ', e: 'kiiro', k: '노란색' },
                { t: 'きもち', e: 'kimochi', k: '기분' },
            ],
        },
        {
            kana: 'く',
            eng: 'ku',
            kor: '쿠',
            words: [
                { t: 'くも', e: 'kumo', k: '구름/거미' },
                { t: 'くち', e: 'kuchi', k: '입' },
                { t: 'くろい', e: 'kuroi', k: '검은색' },
            ],
        },
        {
            kana: 'け',
            eng: 'ke',
            kor: '케',
            words: [
                { t: 'け', e: 'ke', k: '털' },
                { t: 'けむり', e: 'kemuri', k: '연기' },
                { t: 'けいかく', e: 'keikaku', k: '계획' },
            ],
        },
        {
            kana: 'こ',
            eng: 'ko',
            kor: '코',
            words: [
                { t: 'こころ', e: 'kokoro', k: '마음' },
                { t: 'こえ', e: 'koe', k: '목소리' },
                { t: 'こたえ', e: 'kotae', k: '대답' },
            ],
        },
        {
            kana: 'さ',
            eng: 'sa',
            kor: '사',
            words: [
                { t: 'さくら', e: 'sakura', k: '벚꽃' },
                { t: 'さかな', e: 'sakana', k: '생선' },
                { t: 'さむい', e: 'samui', k: '춥다' },
            ],
        },
        {
            kana: 'し',
            eng: 'shi',
            kor: '시',
            words: [
                { t: 'しお', e: 'shio', k: '소금' },
                { t: 'しか', e: 'shika', k: '사슴' },
                { t: 'しる', e: 'shiru', k: '알다' },
            ],
        },
        {
            kana: 'す',
            eng: 'su',
            kor: '스',
            words: [
                { t: 'すし', e: 'sushi', k: '초밥' },
                { t: 'すき', e: 'suki', k: '좋아함' },
                { t: 'すずしい', e: 'suzushii', k: '시원하다' },
            ],
        },
        {
            kana: 'せ',
            eng: 'se',
            kor: '세',
            words: [
                { t: 'せかい', e: 'sekai', k: '세계' },
                { t: 'せなか', e: 'senaka', k: '등' },
                { t: 'せまい', e: 'semai', k: '좁다' },
            ],
        },
        {
            kana: 'そ',
            eng: 'so',
            kor: '소',
            words: [
                { t: 'そら', e: 'sora', k: '하늘' },
                { t: 'そと', e: 'soto', k: '밖' },
                { t: 'そだてる', e: 'sodateru', k: '키우다' },
            ],
        },
        {
            kana: 'た',
            eng: 'ta',
            kor: '타',
            words: [
                { t: 'たかい', e: 'takai', k: '높다/비싸다' },
                { t: 'たべる', e: 'taberu', k: '먹다' },
                { t: 'たのしい', e: 'tanoshii', k: '즐겁다' },
            ],
        },
        {
            kana: 'ち',
            eng: 'chi',
            kor: '치',
            words: [
                { t: 'ちかい', e: 'chikai', k: '가깝다' },
                { t: 'ちから', e: 'chikara', k: '힘' },
                { t: 'ちち', e: 'chichi', k: '아빠' },
            ],
        },
        {
            kana: 'つ',
            eng: 'tsu',
            kor: '츠',
            words: [
                { t: 'つよい', e: 'tsuyoi', k: '강하다' },
                { t: 'つち', e: 'tsuchi', k: '흙' },
                { t: 'つかう', e: 'tsukau', k: '사용하다' },
            ],
        },
        {
            kana: 'て',
            eng: 'te',
            kor: '테',
            words: [
                { t: 'て', e: 'te', k: '손' },
                { t: 'てがみ', e: 'tegami', k: '편지' },
                { t: 'てつだう', e: 'tetsudau', k: '돕다' },
            ],
        },
        {
            kana: 'と',
            eng: 'to',
            kor: '토',
            words: [
                { t: 'とおい', e: 'tooi', k: '멀다' },
                { t: 'とり', e: 'tori', k: '새' },
                { t: 'とまる', e: 'tomaru', k: '멈추다' },
            ],
        },
        {
            kana: 'な',
            eng: 'na',
            kor: '나',
            words: [
                { t: 'なつ', e: 'natsu', k: '여름' },
                { t: 'なまえ', e: 'namae', k: '이름' },
                { t: 'ながい', e: 'nagai', k: '길다' },
            ],
        },
        {
            kana: 'に',
            eng: 'ni',
            kor: '니',
            words: [
                { t: 'にく', e: 'niku', k: '고기' },
                { t: 'にし', e: 'nishi', k: '서쪽' },
                { t: 'にげる', e: 'nigeru', k: '도망치다' },
            ],
        },
        {
            kana: 'ぬ',
            eng: 'nu',
            kor: '누',
            words: [
                { t: 'ぬぐ', e: 'nugu', k: '벗다' },
                { t: 'ぬの', e: 'nuno', k: '천' },
                { t: 'ぬるい', e: 'nurui', k: '미지근하다' },
            ],
        },
        {
            kana: 'ね',
            eng: 'ne',
            kor: '네',
            words: [
                { t: 'ねこ', e: 'neko', k: '고양이' },
                { t: 'ねる', e: 'neru', k: '자다' },
                { t: 'ねがい', e: 'negai', k: '소원' },
            ],
        },
        {
            kana: 'の',
            eng: 'no',
            kor: '노',
            words: [
                { t: 'のむ', e: 'nomu', k: '마시다' },
                { t: 'のり', e: 'nori', k: '김' },
                { t: 'のぼる', e: 'noboru', k: '오르다' },
            ],
        },
        {
            kana: 'は',
            eng: 'ha',
            kor: '하',
            words: [
                { t: 'はな', e: 'hana', k: '꽃' },
                { t: '하야이', e: 'hayai', k: '빠르다' },
                { t: 'はし', e: 'hashi', k: '다리/젓가락' },
            ],
        },
        {
            kana: 'ひ',
            eng: 'hi',
            kor: '히',
            words: [
                { t: 'ひと', e: 'hito', k: '사람' },
                { t: 'ひかり', e: 'hikari', k: '빛' },
                { t: 'ひろい', e: 'hiroi', k: '넓다' },
            ],
        },
        {
            kana: 'ふ',
            eng: 'fu',
            kor: '후',
            words: [
                { t: 'ふね', e: 'fune', k: '배' },
                { t: 'ふゆ', e: 'fuyu', k: '겨울' },
                { t: 'ふとい', e: 'futoi', k: '굵다' },
            ],
        },
        {
            kana: 'へ',
            eng: 'he',
            kor: '헤',
            words: [
                { t: 'へや', e: 'heya', k: '방' },
                { t: 'へび', e: 'hebi', k: '뱀' },
                { t: 'へらす', e: 'herasu', k: '줄이다' },
            ],
        },
        {
            kana: 'ほ',
            eng: 'ho',
            kor: '호',
            words: [
                { t: 'ほし', e: 'hoshi', k: '별' },
                { t: 'ほん', e: 'hon', k: '책' },
                { t: 'ほしい', e: 'hoshii', k: '원하다' },
            ],
        },
        {
            kana: 'ま',
            eng: 'ma',
            kor: '마',
            words: [
                { t: 'まち', e: 'machi', k: '마을' },
                { t: 'まつ', e: 'matsu', k: '기다리다' },
                { t: 'まるい', e: 'marui', k: '둥글다' },
            ],
        },
        {
            kana: 'み',
            eng: 'mi',
            kor: '미',
            words: [
                { t: 'みず', e: 'mizu', k: '물' },
                { t: 'みみ', e: 'mimi', k: '귀' },
                { t: 'みる', e: 'miru', k: '보다' },
            ],
        },
        {
            kana: 'む',
            eng: 'mu',
            kor: '무',
            words: [
                { t: 'むし', e: 'mushi', k: '벌레' },
                { t: 'むら', e: 'mura', k: '마을' },
                { t: 'むずかしい', e: 'muzukashii', k: '어렵다' },
            ],
        },
        {
            kana: 'め',
            eng: 'me',
            kor: '메',
            words: [
                { t: 'め', e: 'me', k: '눈' },
                { t: 'めずらしい', e: 'mezurashii', k: '희귀하다' },
                { t: 'めいれい', e: 'meirei', k: '명령' },
            ],
        },
        {
            kana: 'も',
            eng: 'mo',
            kor: '모',
            words: [
                { t: 'もり', e: 'mori', k: '숲' },
                { t: 'もも', e: 'momo', k: '복숭아' },
                { t: 'もつ', e: 'motsu', k: '들다/가지다' },
            ],
        },
        {
            kana: 'や',
            eng: 'ya',
            kor: '야',
            words: [
                { t: 'やま', e: 'yama', k: '산' },
                { t: 'やさい', e: 'yasai', k: '야채' },
                { t: 'やすみ', e: 'yasumi', k: '휴식' },
            ],
        },
        {
            kana: 'ゆ',
            eng: 'yu',
            kor: '유',
            words: [
                { t: 'ゆき', e: 'yuki', k: '눈' },
                { t: 'ゆめ', e: 'yume', k: '꿈' },
                { t: 'ゆび', e: 'yubi', k: '손가락' },
            ],
        },
        {
            kana: 'よ',
            eng: 'yo',
            kor: '요',
            words: [
                { t: 'よる', e: 'yoru', k: '밤' },
                { t: 'よむ', e: 'yomu', k: '읽다' },
                { t: 'よわい', e: 'yowai', k: '약하다' },
            ],
        },
        {
            kana: 'ら',
            eng: 'ra',
            kor: '라',
            words: [
                { t: 'らくだ', e: 'rakuda', k: '낙타' },
                { t: 'らく', e: 'raku', k: '편함' },
                { t: 'らいげつ', e: 'raigetsu', k: '다음 달' },
            ],
        },
        {
            kana: 'り',
            eng: 'ri',
            kor: '리',
            words: [
                { t: 'りんご', e: 'ringo', k: '사과' },
                { t: 'りゆう', e: 'riyuu', k: '이유' },
                { t: 'りかい', e: 'rikai', k: '이해' },
            ],
        },
        {
            kana: 'る',
            eng: 'ru',
            kor: '루',
            words: [
                { t: 'るす', e: 'rusu', k: '부재중' },
                { t: 'はれる', e: 'hareru', k: '맑다' },
                { t: 'まがる', e: 'magaru', k: '구부러지다' },
            ],
        },
        {
            kana: 'れ',
            eng: 're',
            kor: '레',
            words: [
                { t: 'れきし', e: 'rekishi', k: '역사' },
                { t: 'れんしゅう', e: 'renshuu', k: '연습' },
                { t: 'れいぼう', e: 'reibou', k: '냉방' },
            ],
        },
        {
            kana: 'ろ',
            eng: 'ro',
            kor: '로',
            words: [
                { t: 'ろうそく', e: 'rousoku', k: '양초' },
                { t: 'ろく', e: 'roku', k: '6' },
                { t: 'ろてん', e: 'roten', k: '노점' },
            ],
        },
        {
            kana: 'わ',
            eng: 'wa',
            kor: '와',
            words: [
                { t: 'わたし', e: 'watashi', k: '나' },
                { t: 'わらう', e: 'warau', k: '웃다' },
                { t: 'わかる', e: 'wakaru', k: '알다' },
            ],
        },
        {
            kana: 'を',
            eng: 'wo',
            kor: '오',
            words: [
                { t: 'ほんをよむ', e: 'hon o yomu', k: '책을 읽다' },
                { t: 'みずをのむ', e: 'mizu o nomu', k: '물을 마시다' },
                { t: 'てをあらう', e: 'te o arau', k: '손을 씻다' },
            ],
        },
        {
            kana: 'ん',
            eng: 'n',
            kor: '응',
            words: [
                { t: 'ほん', e: 'hon', k: '책' },
                { t: 'しんぶん', e: 'shinbun', k: '신문' },
                { t: 'みかん', e: 'mikan', k: '귤' },
            ],
        },

        // --- [탁음 - G, Z, D, B] ---
        {
            kana: 'が',
            eng: 'ga',
            kor: '가',
            words: [
                { t: 'がっこう', e: 'gakkou', k: '학교' },
                { t: 'がくせい', e: 'gakusei', k: '학생' },
                { t: 'がいこく', e: 'gaikoku', k: '외국' },
            ],
        },
        {
            kana: 'ぎ',
            eng: 'gi',
            kor: '기',
            words: [
                { t: 'ぎんこう', e: 'ginkou', k: '은행' },
                { t: 'ぎじゅつ', e: 'gijutsu', k: '기술' },
                { t: 'ぎもん', e: 'gimon', k: '의문' },
            ],
        },
        {
            kana: 'ぐ',
            eng: 'gu',
            kor: '구',
            words: [
                { t: 'ぐあい', e: 'guai', k: '상태' },
                { t: 'ぐんじん', e: 'gunjin', k: '군인' },
                { t: 'すぐ', e: 'sugu', k: '바로' },
            ],
        },
        {
            kana: 'げ',
            eng: 'ge',
            kor: '게',
            words: [
                { t: 'げんき', e: 'genki', k: '건강/활기' },
                { t: 'げつようび', e: 'getsuyoubi', k: '월요일' },
                { t: 'げんご', e: 'gengo', k: '언어' },
            ],
        },
        {
            kana: 'ご',
            eng: 'go',
            kor: '고',
            words: [
                { t: 'ごはん', e: 'gohan', k: '밥' },
                { t: 'ごぜん', e: 'gozen', k: '오전' },
                { t: 'ごご', e: 'gogo', k: '오후' },
            ],
        },

        {
            kana: 'ざ',
            eng: 'za',
            kor: '자',
            words: [
                { t: 'ざっし', e: 'zasshi', k: '잡지' },
                { t: 'ざんねん', e: 'zannen', k: '아쉬움' },
                { t: 'わざ', e: 'waza', k: '기술/기술' },
            ],
        },
        {
            kana: 'じ',
            eng: 'ji',
            kor: '지',
            words: [
                { t: 'じかん', e: 'jikan', k: '시간' },
                { t: 'じしん', e: 'jishin', k: '자신/지진' },
                { t: 'じしょ', e: 'jisho', k: '사전' },
            ],
        },
        {
            kana: 'ず',
            eng: 'zu',
            kor: '즈',
            words: [
                { t: 'ちず', e: 'chizu', k: '지도' },
                { t: 'はずかしい', e: 'hazukashii', k: '부끄럽다' },
                { t: 'すず', e: 'suzu', k: '방울' },
            ],
        },
        {
            kana: 'ぜ',
            eng: 'ze',
            kor: '제',
            words: [
                { t: 'ぜんぶ', e: 'zenbu', k: '전부' },
                { t: 'ぜんぜん', e: 'zenzen', k: '전혀' },
                { t: 'かぜ', e: 'kaze', k: '바람/감기' },
            ],
        },
        {
            kana: 'ぞ',
            eng: 'zo',
            kor: '조',
            words: [
                { t: 'かぞく', e: 'kazoku', k: '가족' },
                { t: 'ぞう', e: 'zou', k: '코끼리' },
                { t: 'いぞん', e: 'izon', k: '의존' },
            ],
        },

        {
            kana: 'だ',
            eng: 'da',
            kor: '다',
            words: [
                { t: 'だいじ', e: 'daiji', k: '중요함' },
                { t: 'だれ', e: 'dare', k: '누구' },
                { t: 'からだ', e: 'karada', k: '몸' },
            ],
        },
        {
            kana: 'ぢ',
            eng: 'ji',
            kor: '지',
            words: [
                { t: 'はなぢ', e: 'hanaji', k: '코피' },
                { t: 'ぢ', e: 'ji', k: '치질' },
                { t: 'まぢか', e: 'majika', k: '아주 가까움' },
            ],
        },
        {
            kana: 'づ',
            eng: 'zu',
            kor: '즈',
            words: [
                { t: 'つづく', e: 'tsuzuku', k: '계속되다' },
                { t: 'てづくり', e: 'tezukuri', k: '수제' },
                { t: 'こづつみ', e: 'kodutsumi', k: '소포' },
            ],
        },
        {
            kana: 'で',
            eng: 'de',
            kor: '데',
            words: [
                { t: 'でぐち', e: 'deguchi', k: '출구' },
                { t: 'でんわ', e: 'denwa', k: '전화' },
                { t: 'できる', e: 'dekiru', k: '할 수 있다' },
            ],
        },
        {
            kana: 'ど',
            eng: 'do',
            kor: '도',
            words: [
                { t: 'どこ', e: 'doko', k: '어디' },
                { t: 'どようび', e: 'doyoubi', k: '토요일' },
                { t: 'まど', e: 'mado', k: '창문' },
            ],
        },

        {
            kana: 'ば',
            eng: 'ba',
            kor: '바',
            words: [
                { t: 'ばんごう', e: 'bangou', k: '번호' },
                { t: 'ばんごはん', e: 'bangohan', k: '저녁식사' },
                { t: 'ばしょ', e: 'basho', k: '장소' },
            ],
        },
        {
            kana: 'び',
            eng: 'bi',
            kor: '비',
            words: [
                { t: 'びじゅつかん', e: 'bijutsukan', k: '미술관' },
                { t: 'びょうき', e: 'byouki', k: '병' },
                { t: 'はなび', e: 'hanabi', k: '불꽃놀이' },
            ],
        },
        {
            kana: 'ぶ',
            eng: 'bu',
            kor: '부',
            words: [
                { t: 'ぶた', e: 'buta', k: '돼지' },
                { t: 'ぶっか', e: 'bukka', k: '물가' },
                { t: 'あぶない', e: 'abunai', k: '위험하다' },
            ],
        },
        {
            kana: 'べ',
            eng: 'be',
            kor: '베',
            words: [
                { t: 'べんきょう', e: 'benkyou', k: '공부' },
                { t: 'べんり', e: 'benri', k: '편리함' },
                { t: 'たべる', e: 'taberu', k: '먹다' },
            ],
        },
        {
            kana: 'ぼ',
            eng: 'bo',
            kor: '보',
            words: [
                { t: 'ぼうし', e: 'boushi', k: '모자' },
                { t: 'ぼく', e: 'boku', k: '나(남성)' },
                { t: 'のぼる', e: 'noboru', k: '오르다' },
            ],
        },

        // --- [반탁음 - P] ---
        {
            kana: 'ぱ',
            eng: 'pa',
            kor: '파',
            words: [
                { t: 'ぱっぱ', e: 'pappa', k: '쑥쑥(기세)' },
                { t: 'はっぱ', e: 'happa', k: '잎사귀' },
                { t: 'ぱちぱち', e: 'pachipachi', k: '짝짝(박수)' },
            ],
        },
        {
            kana: 'ぴ',
            eng: 'pi',
            kor: '피',
            words: [
                { t: 'ぴかぴか', e: 'pikapika', k: '번쩍번쩍' },
                { t: 'ぴたり', e: 'pitari', k: '딱(멈춤)' },
                { t: 'えんぴつ', e: 'enpitsu', k: '연필' },
            ],
        },
        {
            kana: 'ぷ',
            eng: 'pu',
            kor: '푸',
            words: [
                { t: 'ぷんぷん', e: 'punpun', k: '정색/흥분' },
                { t: 'きっぷ', e: 'kippu', k: '표' },
                { t: 'てんぷら', e: 'tenpura', k: '튀김' },
            ],
        },
        {
            kana: 'ぺ',
            eng: 'pe',
            kor: '페',
            words: [
                { t: 'ぺらぺら', e: 'perapera', k: '유창함' },
                { t: 'ぺこぺこ', e: 'pekopeko', k: '배고픔' },
                { t: 'ほっぺ', e: 'hoppe', k: '볼' },
            ],
        },
        {
            kana: 'ぽ',
            eng: 'po',
            kor: '포',
            words: [
                { t: 'ぽかぽか', e: 'pokapoka', k: '따끈따끈' },
                { t: 'さんぽ', e: 'sanpo', k: '산책' },
                { t: 'しっぽ', e: 'shippo', k: '꼬리' },
            ],
        },
        {
            kana: 'きゃ',
            eng: 'kya',
            kor: '캬',
            words: [{ t: 'きゃく', e: 'kyaku', k: '손님' }],
        },
        {
            kana: 'きゅ',
            eng: 'kyu',
            kor: '큐',
            words: [{ t: 'きゅうり', e: 'kyuuri', k: '오이' }],
        },
        {
            kana: 'きょ',
            eng: 'kyo',
            kor: '켜',
            words: [{ t: 'きょねん', e: 'kyonen', k: '작년' }],
        },
        {
            kana: 'しゃ',
            eng: 'sha',
            kor: '샤',
            words: [{ t: 'しゃしん', e: 'shashin', k: '사진' }],
        },
        {
            kana: 'しゅ',
            eng: 'shu',
            kor: '슈',
            words: [{ t: 'しゅくだい', e: 'shukudai', k: '숙제' }],
        },
        {
            kana: 'しょ',
            eng: 'sho',
            kor: '쇼',
            words: [{ t: 'しょくどう', e: 'shokudou', k: '식당' }],
        },
        {
            kana: 'ちゃ',
            eng: 'cha',
            kor: '챠',
            words: [{ t: 'ちゃいろ', e: 'chairo', k: '갈색' }],
        },
        {
            kana: 'ちゅ',
            eng: 'chu',
            kor: '츄',
            words: [{ t: 'ちゅうい', e: 'chuui', k: '주의' }],
        },
        {
            kana: 'ちょ',
            eng: 'cho',
            kor: '쵸',
            words: [{ t: 'ちょっと', e: 'chotto', k: '잠깐' }],
        },
        {
            kana: 'にゃ',
            eng: 'nya',
            kor: '냐',
            words: [{ t: 'こんにゃく', e: 'konnyaku', k: '곤약' }],
        },
        {
            kana: 'にゅ',
            eng: 'nyu',
            kor: '뉴',
            words: [{ t: 'にゅうがく', e: 'nyuugaku', k: '입학' }],
        },
        {
            kana: 'にょ',
            eng: 'nyo',
            kor: '뇨',
            words: [{ t: 'にょう', e: 'nyou', k: '소변' }],
        },
        {
            kana: 'ひゃ',
            eng: 'hya',
            kor: '햐',
            words: [{ t: 'ひゃく', e: 'hyaku', k: '100' }],
        },
        {
            kana: 'ひゅ',
            eng: 'hyu',
            kor: '휴',
            words: [{ t: 'ひゅうが', e: 'hyuuga', k: '휴가(지명)' }],
        },
        {
            kana: 'ひょ',
            eng: 'hyo',
            kor: '효',
            words: [{ t: 'ひょう', e: 'hyou', k: '표/표범' }],
        },
        {
            kana: 'みゃ',
            eng: 'mya',
            kor: '먀',
            words: [{ t: 'みゃく', e: 'myaku', k: '맥박' }],
        },
        {
            kana: 'みゅ',
            eng: 'myu',
            kor: '뮤',
            words: [{ t: 'みゅうじ', e: 'myuuji', k: '묘지(고어 성씨)' }],
        },
        {
            kana: 'みょ',
            eng: 'myo',
            kor: '묘',
            words: [{ t: 'みょうじ', e: 'myouji', k: '성씨' }],
        },
        {
            kana: 'りゃ',
            eng: 'rya',
            kor: '랴',
            words: [{ t: 'りゃく', e: 'ryaku', k: '생략' }],
        },
        {
            kana: 'りゅ',
            eng: 'ryu',
            kor: '류',
            words: [{ t: 'りゅう', e: 'ryuu', k: '용' }],
        },
        {
            kana: 'りょ',
            eng: 'ryo',
            kor: '료',
            words: [{ t: 'りょこう', e: 'ryokou', k: '여행' }],
        },
    ],

    katakana: [
        {
            kana: 'ア',
            eng: 'a',
            kor: '아',
            words: [
                { t: 'アイス', e: 'aisu', k: '아이스크림' },
                { t: 'アメリカ', e: 'amerika', k: '미국' },
                { t: 'アニメ', e: 'anime', k: '애니메이션' },
            ],
        },
        {
            kana: 'イ',
            eng: 'i',
            kor: '이',
            words: [
                { t: 'インク', e: 'inku', k: '잉크' },
                { t: 'イメージ', e: 'ime-ji', k: '이미지' },
                { t: 'イベント', e: 'ibento', k: '이벤트' },
            ],
        },
        {
            kana: 'ウ',
            eng: 'u',
            kor: '우',
            words: [
                { t: 'ウイルス', e: 'uirusu', k: '바이러스' },
                { t: 'ウール', e: 'u-ru', k: '울(양털)' },
                { t: 'ウェブ', e: 'webu', k: '웹' },
            ],
        },
        {
            kana: 'エ',
            eng: 'e',
            kor: '에',
            words: [
                { t: 'エアコン', e: 'eakon', k: '에어컨' },
                { t: 'エンジン', e: 'enjin', k: '엔진' },
                { t: 'エレベーター', e: 'erebe-ta-', k: '엘리베이터' },
            ],
        },
        {
            kana: 'オ',
            eng: 'o',
            kor: '오',
            words: [
                { t: 'オレンジ', e: 'orenji', k: '오렌지' },
                { t: 'オートバイ', e: 'o-tobai', k: '오토바이' },
                { t: 'オフィス', e: 'ofisu', k: '사무실' },
            ],
        },
        {
            kana: 'カ',
            eng: 'ka',
            kor: '카',
            words: [
                { t: 'カメラ', e: 'kamera', k: '카메라' },
                { t: 'カレー', e: 'kare-', k: '카레' },
                { t: 'カレンダー', e: 'karenda-', k: '달력' },
            ],
        },
        {
            kana: 'キ',
            eng: 'ki',
            kor: '키',
            words: [
                { t: 'ギター', e: 'gita-', k: '기타' },
                { t: 'キウイ', e: 'kiui', k: '키위' },
                { t: 'キャンプ', e: 'kyanpu', k: '캠핑' },
            ],
        },
        {
            kana: 'ク',
            eng: 'ku',
            kor: '쿠',
            words: [
                { t: 'クラス', e: 'kurasu', k: '학급/클래스' },
                { t: 'クラブ', e: 'kurabu', k: '클럽' },
                { t: 'クリスマス', e: 'kurisumasu', k: '크리스마스' },
            ],
        },
        {
            kana: 'ケ',
            eng: 'ke',
            kor: '케',
            words: [
                { t: 'ケーキ', e: 'ke-ki', k: '케이크' },
                { t: 'ケース', e: 'ke-su', k: '케이스' },
                { t: 'ゲーム', e: 'ge-mu', k: '게임' },
            ],
        },
        {
            kana: 'コ',
            eng: 'ko',
            kor: '코',
            words: [
                { t: 'コーヒー', e: 'ko-hi-', k: '커피' },
                { t: 'コート', e: 'ko-to', k: '코트' },
                { t: 'コンサート', e: 'konsa-to', k: '콘서트' },
            ],
        },
        {
            kana: 'サ',
            eng: 'sa',
            kor: '사',
            words: [
                { t: 'サッカー', e: 'sakka-', k: '축구' },
                { t: 'サラダ', e: 'sarada', k: '샐러드' },
                { t: 'サイズ', e: 'saizu', k: '사이즈' },
            ],
        },
        {
            kana: 'シ',
            eng: 'shi',
            kor: '시',
            words: [
                { t: 'シャツ', e: 'shatsu', k: '셔츠' },
                { t: 'シャワー', e: 'shawa-', k: '샤워' },
                { t: 'システム', e: 'shisutemu', k: '시스템' },
            ],
        },
        {
            kana: 'ス',
            eng: 'su',
            kor: '스',
            words: [
                { t: 'スキー', e: 'suki-', k: '스키' },
                { t: 'スーパー', e: 'su-pa-', k: '슈퍼마켓' },
                { t: 'スポーツ', e: 'supo-tsu', k: '스포츠' },
            ],
        },
        {
            kana: 'セ',
            eng: 'se',
            kor: '세',
            words: [
                { t: 'セーター', e: 'se-ta-', k: '스웨터' },
                { t: 'セット', e: 'setto', k: '세트' },
                { t: 'センター', e: 'senta-', k: '센터' },
            ],
        },
        {
            kana: 'ソ',
            eng: 'so',
            kor: '소',
            words: [
                { t: 'ソファ', e: 'sofa', k: '소파' },
                { t: 'ソース', e: 'so-su', k: '소스' },
                { t: 'ソックス', e: 'sokkusu', k: '양말' },
            ],
        },
        {
            kana: 'タ',
            eng: 'ta',
            kor: '타',
            words: [
                { t: 'タクシー', e: 'takushi-', k: '택시' },
                { t: 'タオル', e: 'taoru', k: '수건' },
                { t: 'タイヤ', e: 'taiya', k: '타이어' },
            ],
        },
        {
            kana: 'チ',
            eng: 'chi',
            kor: '치',
            words: [
                { t: 'チーズ', e: 'chi-zu', k: '치즈' },
                { t: 'チーム', e: 'chi-mu', k: '팀' },
                { t: 'チケット', e: 'chiketto', k: '티켓' },
            ],
        },
        {
            kana: 'ツ',
            eng: 'tsu',
            kor: '츠',
            words: [
                { t: 'ツアー', e: 'tsua-', k: '투어' },
                { t: 'ツナ', e: 'tsuna', k: '참치(캔)' },
                { t: 'ツリー', e: 'tsuri-', k: '트리' },
            ],
        },
        {
            kana: 'テ',
            eng: 'te',
            kor: '테',
            words: [
                { t: 'テレビ', e: 'terebi', k: 'TV' },
                { t: 'テニス', e: 'tenisu', k: '테니스' },
                { t: 'テーブル', e: 'te-buru', k: '테이블' },
            ],
        },
        {
            kana: 'ト',
            eng: 'to',
            kor: '토',
            words: [
                { t: 'トイレ', e: 'toire', k: '화장실' },
                { t: 'トマト', e: 'tomato', k: '토마토' },
                { t: 'トラック', e: 'torakku', k: '트럭' },
            ],
        },
        {
            kana: 'ナ',
            eng: 'na',
            kor: '나',
            words: [
                { t: 'ナイフ', e: 'naifu', k: '나이프' },
                { t: 'ナンバー', e: 'nanba-', k: '넘버' },
                { t: 'ナッツ', e: 'nattsu', k: '견과류' },
            ],
        },
        {
            kana: 'ニ',
            eng: 'ni',
            kor: '니',
            words: [
                { t: 'ニュース', e: 'nyu-su', k: '뉴스' },
                { t: 'ニット', e: 'nitto', k: '니트' },
                { t: 'ニッケル', e: 'nikkeru', k: '니켈' },
            ],
        },
        {
            kana: 'ヌ',
            eng: 'nu',
            kor: '누',
            words: [
                { t: 'ヌードル', e: 'nu-doru', k: '누들' },
                { t: 'ヌー', e: 'nu-', k: '누(동물)' },
                { t: 'カヌー', e: 'kanu-', k: '카누' },
            ],
        },
        {
            kana: 'ネ',
            eng: 'ne',
            kor: '네',
            words: [
                { t: 'ネクタイ', e: 'nekutai', k: '넥타이' },
                { t: 'ネット', e: 'netto', k: '인터넷' },
                { t: 'ネックレス', e: 'nekkuresu', k: '목걸이' },
            ],
        },
        {
            kana: 'ノ',
            eng: 'no',
            kor: '노',
            words: [
                { t: 'ノート', e: 'no-to', k: '노트' },
                { t: 'ノック', e: 'nokku', k: '노크' },
                { t: 'ピアノ', e: 'piano', k: '피아노' },
            ],
        },
        {
            kana: 'ハ',
            eng: 'ha',
            kor: '하',
            words: [
                { t: 'ハンバーガー', e: 'hanba-ga-', k: '햄버거' },
                { t: 'ハンドル', e: 'handoru', k: '핸들' },
                { t: 'ハート', e: 'ha-to', k: '하트' },
            ],
        },
        {
            kana: 'ヒ',
            eng: 'hi',
            kor: '히',
            words: [
                { t: 'ヒーター', e: 'hi-ta-', k: '히터' },
                { t: 'ヒーロー', e: 'hi-ro-', k: '영웅' },
                { t: 'ヒント', e: 'hinto', k: '힌트' },
            ],
        },
        {
            kana: 'フ',
            eng: 'fu',
            kor: '후',
            words: [
                { t: 'フォーク', e: 'fo-ku', k: '포크' },
                { t: 'フライパン', e: 'furaipan', k: '프라이팬' },
                { t: 'フルート', e: 'furu-to', k: '플루트' },
            ],
        },
        {
            kana: 'ヘ',
            eng: 'he',
            kor: '헤',
            words: [
                { t: 'ヘリコプター', e: 'herikoputa-', k: '헬리콥터' },
                { t: 'ヘルメット', e: 'herumetto', k: '헬멧' },
                { t: 'ヘア', e: 'hea', k: '헤어(머리)' },
            ],
        },
        {
            kana: 'ホ',
            eng: 'ho',
            kor: '호',
            words: [
                { t: 'ホテル', e: 'hoteru', k: '호텔' },
                { t: 'ホーム', e: 'ho-mu', k: '승강장' },
                { t: 'ホット', e: 'hotto', k: '핫(뜨거운)' },
            ],
        },
        {
            kana: 'マ',
            eng: 'ma',
            kor: '마',
            words: [
                { t: 'マスク', e: 'masuku', k: '마스크' },
                { t: 'マイク', e: 'maiku', k: '마이크' },
                { t: 'マッチ', e: 'macchi', k: '성냥' },
            ],
        },
        {
            kana: 'ミ',
            eng: 'mi',
            kor: '미',
            words: [
                { t: 'ミルク', e: 'miruku', k: '우유' },
                { t: 'ミス', e: 'misu', k: '실수' },
                { t: 'ミント', e: 'minto', k: '민트' },
            ],
        },
        {
            kana: 'ム',
            eng: 'mu',
            kor: '무',
            words: [
                { t: 'ムード', e: 'mu-do', k: '무드' },
                { t: 'ハム', e: 'hamu', k: '햄' },
                { t: 'ガム', e: 'gamu', k: '껌' },
            ],
        },
        {
            kana: 'メ',
            eng: 'me',
            kor: '메',
            words: [
                { t: 'メニュー', e: 'menyu-', k: '메뉴' },
                { t: 'メロン', e: 'meron', k: '멜론' },
                { t: 'メモ', e: 'memo', k: '메모' },
            ],
        },
        {
            kana: 'モ',
            eng: 'mo',
            kor: '모',
            words: [
                { t: 'モニター', e: 'monita-', k: '모니터' },
                { t: 'モデル', e: 'moderu', k: '모델' },
                { t: 'モノレール', e: 'monore-ru', k: '모노레일' },
            ],
        },
        {
            kana: 'ヤ',
            eng: 'ya',
            kor: '야',
            words: [
                { t: 'ヤング', e: 'yangu', k: '젊은이' },
                { t: 'タイヤ', e: 'taiya', k: '타이어' },
                { t: 'イヤリング', e: 'iyaringu', k: '귀걸이' },
            ],
        },
        {
            kana: 'ユ',
            eng: 'yu',
            kor: '유',
            words: [
                { t: 'ユーザー', e: 'yu-za-', k: '유저' },
                { t: 'ユニフォーム', e: 'yunifo-mu', k: '유니폼' },
                { t: 'ユーモア', e: 'yu-moa', k: '유머' },
            ],
        },
        {
            kana: 'ヨ',
            eng: 'yo',
            kor: '요',
            words: [
                { t: 'ヨーグルト', e: 'yo-guruto', k: '요구르트' },
                { t: 'ヨーロッパ', e: 'yo-roppa', k: '유럽' },
                { t: 'ヨット', e: 'yotto', k: '요트' },
            ],
        },
        {
            kana: 'ラ',
            eng: 'ra',
            kor: '라',
            words: [
                { t: 'ラーメン', e: 'ra-men', k: '라면' },
                { t: 'ラジオ', e: 'rajio', k: '라디오' },
                { t: 'ライオン', e: 'raion', k: '사자' },
            ],
        },
        {
            kana: 'リ',
            eng: 'ri',
            kor: '리',
            words: [
                { t: 'リボン', e: 'ribon', k: '리본' },
                { t: 'リズム', e: 'rizumu', k: '리듬' },
                { t: 'リスト', e: 'risuto', k: '리스트' },
            ],
        },
        {
            kana: 'ル',
            eng: 'ru',
            kor: '루',
            words: [
                { t: 'ルール', e: 'ru-ru', k: '규칙' },
                { t: 'ルビー', e: 'rubi-', k: '루비' },
                { t: 'プール', e: 'pu-ru', k: '수영장' },
            ],
        },
        {
            kana: 'レ',
            eng: 're',
            kor: '레',
            words: [
                { t: 'レストラン', e: 'resutoran', k: '레스토랑' },
                { t: 'レモン', e: 'remon', k: '레몬' },
                { t: 'レベル', e: 'reberu', k: '레벨' },
            ],
        },
        {
            kana: 'ロ',
            eng: 'ro',
            kor: '로',
            words: [
                { t: 'ロボット', e: 'robotto', k: '로봇' },
                { t: 'ロケット', e: 'roketto', k: '로켓' },
                { t: 'ロッカー', e: 'rokka-', k: '로커' },
            ],
        },
        {
            kana: 'ワ',
            eng: 'wa',
            kor: '와',
            words: [
                { t: 'ワイン', e: 'wain', k: '와인' },
                { t: 'ワイド', e: 'waido', k: '와이드' },
                { t: 'ワンピ―ス', e: 'wanpi-su', k: '원피스' },
            ],
        },
        {
            kana: 'ヲ',
            eng: 'wo',
            kor: '오',
            words: [
                { t: 'ヲタク', e: 'wotaku', k: '오타쿠' },
                { t: 'ヲ', e: 'wo', k: '조사' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ン',
            eng: 'n',
            kor: '응',
            words: [
                { t: 'パンツ', e: 'pantsu', k: '바지/팬티' },
                { t: 'ペン', e: 'pen', k: '펜' },
                { t: 'レモン', e: 'remon', k: '레몬' },
            ],
        },
        {
            kana: 'ガ',
            eng: 'ga',
            kor: '가',
            words: [
                { t: 'ガス', e: 'gasu', k: '가스' },
                { t: 'ガム', e: 'gamu', k: '껌' },
                { t: 'ガラス', e: 'garasu', k: '유리' },
            ],
        },
        {
            kana: 'ギ',
            eng: 'gi',
            kor: '기',
            words: [
                { t: 'ギター', e: 'gita-', k: '기타' },
                { t: 'ギフト', e: 'gifuto', k: '선물' },
                { t: 'ギャグ', e: 'gyagu', k: '개그' },
            ],
        },
        {
            kana: 'グ',
            eng: 'gu',
            kor: '구',
            words: [
                { t: 'グッズ', e: 'gutsu', k: '굿즈' },
                { t: 'グループ', e: 'guru-pu', k: '그룹' },
                { t: 'グラム', e: 'guramu', k: '그램' },
            ],
        },
        {
            kana: 'ゲ',
            eng: 'ge',
            kor: '게',
            words: [
                { t: 'ゲーム', e: 'ge-mu', k: '게임' },
                { t: 'ゲスト', e: 'gesuto', k: '게스트' },
                { t: 'ゲート', e: 'ge-to', k: '게이트' },
            ],
        },
        {
            kana: 'ゴ',
            eng: 'go',
            kor: '고',
            words: [
                { t: 'ゴルフ', e: 'gorufu', k: '골프' },
                { t: 'ゴールド', e: 'go-rudo', k: '골드' },
                { t: 'ゴール', e: 'go-ru', k: '골' },
            ],
        },

        {
            kana: 'ザ',
            eng: 'za',
            kor: '자',
            words: [
                { t: 'サイズ', e: 'saizu', k: '사이즈' },
                { t: 'デザイン', e: 'dezain', k: '디자인' },
                { t: 'ピザ', e: 'piza', k: '피자' },
            ],
        },
        {
            kana: 'ジ',
            eng: 'ji',
            kor: '지',
            words: [
                { t: 'ジム', e: 'jimu', k: '체육관(Gym)' },
                { t: 'ジュース', e: 'ju-su', k: '주스' },
                { t: 'ジャケット', e: 'jaketto', k: '재킷' },
            ],
        },
        {
            kana: 'ズ',
            eng: 'zu',
            kor: '즈',
            words: [
                { t: 'ズボン', e: 'zubon', k: '바지' },
                { t: 'サイズ', e: 'saizu', k: '사이즈' },
                { t: 'ジャズ', e: 'jazu', k: '재즈' },
            ],
        },
        {
            kana: 'ゼ',
            eng: 'ze',
            kor: '제',
            words: [
                { t: 'ゼロ', e: 'zero', k: '제로' },
                { t: 'ゼリー', e: 'zeri-', k: '젤리' },
                { t: 'プレゼン', e: 'purezen', k: '프레젠테이션' },
            ],
        },
        {
            kana: 'ゾ',
            eng: 'zo',
            kor: '조',
            words: [
                { t: 'ゾーン', e: 'zo-n', k: '존(구역)' },
                { t: 'ゾンビ', e: 'zonbi', k: '좀비' },
                { t: '-', e: '-', k: '-' },
            ],
        },

        {
            kana: 'ダ',
            eng: 'da',
            kor: '다',
            words: [
                { t: 'ダンス', e: 'dansu', k: '댄스' },
                { t: 'ダイヤ', e: 'daiya', k: '다이아' },
                { t: 'ダム', e: 'damu', k: '댐' },
            ],
        },
        {
            kana: 'ヂ',
            eng: 'ji',
            kor: '지',
            words: [
                { t: '-', e: '-', k: '(거의 안씀)' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ヅ',
            eng: 'zu',
            kor: '즈',
            words: [
                { t: '-', e: '-', k: '(거의 안씀)' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'デ',
            eng: 'de',
            kor: '데',
            words: [
                { t: 'データ', e: 'de-ta', k: '데이터' },
                { t: 'デザイン', e: 'dezain', k: '디자인' },
                { t: 'デパート', e: 'depa-to', k: '백화점' },
            ],
        },
        {
            kana: 'ド',
            eng: 'do',
            kor: '도',
            words: [
                { t: 'ドア', e: 'doa', k: '문(Door)' },
                { t: 'ドラマ', e: 'dorama', k: '드라마' },
                { t: 'ドライブ', e: 'doraibu', k: '드라이브' },
            ],
        },

        {
            kana: 'バ',
            eng: 'ba',
            kor: '바',
            words: [
                { t: 'バス', e: 'basu', k: '버스' },
                { t: 'バイク', e: 'baiku', k: '오토바이' },
                { t: 'バター', e: 'bata-', k: '버터' },
            ],
        },
        {
            kana: 'ビ',
            eng: 'bi',
            kor: '비',
            words: [
                { t: 'ビール', e: 'bi-ru', k: '맥주' },
                { t: 'ビル', e: 'biru', k: '빌딩' },
                { t: 'ビデオ', e: 'bideo', k: '비디오' },
            ],
        },
        {
            kana: 'ブ',
            eng: 'bu',
            kor: '부',
            words: [
                { t: 'ブログ', e: 'burogu', k: '블로그' },
                { t: 'ブランド', e: 'burando', k: '브랜드' },
                { t: 'ブルー', e: 'buru-', k: '블루' },
            ],
        },
        {
            kana: 'ベ',
            eng: 'be',
            kor: '베',
            words: [
                { t: 'ベッド', e: 'beddo', k: '침대' },
                { t: 'ベルト', e: 'beruto', k: '벨트' },
                { t: 'ベンチ', e: 'benchi', k: '벤치' },
            ],
        },
        {
            kana: 'ボ',
            eng: 'bo',
            kor: '보',
            words: [
                { t: 'ボール', e: 'bo-ru', k: '공' },
                { t: 'ボタン', e: 'botan', k: '단추' },
                { t: 'ロボット', e: 'robotto', k: '로봇' },
            ],
        },
        {
            kana: 'パ',
            eng: 'pa',
            kor: '파',
            words: [
                { t: 'パン', e: 'pan', k: '빵' },
                { t: 'パスタ', e: 'pasuta', k: '파스타' },
                { t: 'パーティー', e: 'pa-ti-', k: '파티' },
            ],
        },
        {
            kana: 'ピ',
            eng: 'pi',
            kor: '피',
            words: [
                { t: 'ピアノ', e: 'piano', k: '피아노' },
                { t: 'ピンク', e: 'pinku', k: '분홍' },
                { t: 'ピザ', e: 'piza', k: '피자' },
            ],
        },
        {
            kana: 'プ',
            eng: 'pu',
            kor: '푸',
            words: [
                { t: 'プール', e: 'pu-ru', k: '수영장' },
                { t: 'プロ', e: 'puro', k: '프로' },
                { t: 'プリン', e: 'purin', k: '푸딩' },
            ],
        },
        {
            kana: 'ペ',
            eng: 'pe',
            kor: '페',
            words: [
                { t: 'ペン', e: 'pen', k: '펜' },
                { t: 'ページ', e: 'pe-ji', k: '페이지' },
                { t: 'ペット', e: 'petto', k: '애완동물' },
            ],
        },
        {
            kana: 'ポ',
            eng: 'po',
            kor: '포',
            words: [
                { t: 'ポスト', e: 'posuto', k: '우체통' },
                { t: 'ポケット', e: 'poketto', k: '주머니' },
                { t: 'ポスター', e: 'posuta-', k: '포스터' },
            ],
        },

        // --- [요음 - Kya, Sha, Cha...] ---
        {
            kana: 'キャ',
            eng: 'kya',
            kor: '캬',
            words: [
                { t: 'キャンディ', e: 'kyandi', k: '사탕' },
                { t: 'キャンプ', e: 'kyanpu', k: '캠프' },
                { t: 'キャラクター', e: 'kyarakuta-', k: '캐릭터' },
            ],
        },
        {
            kana: 'キュ',
            eng: 'kyu',
            kor: '큐',
            words: [
                { t: 'キュート', e: 'kyu-to', k: '큐트(귀엽다)' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'キョ',
            eng: 'kyo',
            kor: '쿄',
            words: [
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },

        {
            kana: 'シャ',
            eng: 'sha',
            kor: '샤',
            words: [
                { t: 'シャワー', e: 'shawa-', k: '샤워' },
                { t: 'シャツ', e: 'shatsu', k: '셔츠' },
                { t: 'シャンプー', e: 'shanpu-', k: '샴푸' },
            ],
        },
        {
            kana: 'シュ',
            eng: 'shu',
            kor: '슈',
            words: [
                { t: 'シューズ', e: 'shu-zu', k: '슈즈(신발)' },
                { t: 'シュガー', e: 'shuga-', k: '설탕' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ショ',
            eng: 'sho',
            kor: '쇼',
            words: [
                { t: 'ショップ', e: 'shoppu', k: '상점(Shop)' },
                { t: 'ショー', e: 'sho-', k: '쇼(Show)' },
                { t: 'ショック', e: 'shokku', k: '쇼크' },
            ],
        },

        {
            kana: 'チャ',
            eng: 'cha',
            kor: '챠',
            words: [
                { t: 'チャンス', e: 'chansu', k: '기회(Chance)' },
                { t: 'チャンネル', e: 'channeru', k: '채널' },
                { t: 'チャレンジ', e: 'charenji', k: '도전' },
            ],
        },
        {
            kana: 'チュ',
            eng: 'chu',
            kor: '츄',
            words: [
                { t: 'チューリップ', e: 'chu-rippu', k: '튤립' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'チョ',
            eng: 'cho',
            kor: '쵸',
            words: [
                { t: 'チョコレート', e: 'chokore-to', k: '초콜릿' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },

        {
            kana: 'ニャ',
            eng: 'nya',
            kor: '냐',
            words: [
                { t: 'ニャー', e: 'nya-', k: '야옹' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ニュ',
            eng: 'nyu',
            kor: '뉴',
            words: [
                { t: 'ニュース', e: 'nyu-su', k: '뉴스' },
                { t: 'ニュー', e: 'nyu-', k: '새로운(New)' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ニョ',
            eng: 'nyo',
            kor: '뇨',
            words: [
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },

        {
            kana: 'ヒャ',
            eng: 'hya',
            kor: '햐',
            words: [
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ヒュ',
            eng: 'hyu',
            kor: '휴',
            words: [
                { t: 'ヒューマン', e: 'hyu-man', k: '휴먼(인간)' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ヒョ',
            eng: 'hyo',
            kor: '효',
            words: [
                { t: 'ヒョウ', e: 'hyou', k: '표범' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },

        {
            kana: 'ミャ',
            eng: 'mya',
            kor: '먀',
            words: [
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ミュ',
            eng: 'myu',
            kor: '뮤',
            words: [
                { t: 'ミュージック', e: 'myu-jikku', k: '음악(Music)' },
                { t: 'ミュージカル', e: 'myu-jikaru', k: '뮤지컬' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ミョ',
            eng: 'myo',
            kor: '묘',
            words: [
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },

        {
            kana: 'リャ',
            eng: 'rya',
            kor: '랴',
            words: [
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'リュ',
            eng: 'ryu',
            kor: '류',
            words: [
                { t: 'リュック', e: 'ryukku', k: '배낭' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'リョ',
            eng: 'ryo',
            kor: '료',
            words: [
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },

        {
            kana: 'ギャ',
            eng: 'gya',
            kor: '갸',
            words: [
                { t: 'ギャグ', e: 'gyagu', k: '개그' },
                { t: 'ギャング', e: 'gyangu', k: '갱(Gang)' },
                { t: 'ギャンブル', e: 'gyanburu', k: '도박' },
            ],
        },
        {
            kana: 'ギュ',
            eng: 'gyu',
            kor: '규',
            words: [
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ギョ',
            eng: 'gyo',
            kor: '교',
            words: [
                { t: 'ギョーザ', e: 'gyo-za', k: '만두' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },

        {
            kana: 'ジャ',
            eng: 'ja',
            kor: '쟈',
            words: [
                { t: 'ジャム', e: 'jamu', k: '잼' },
                { t: 'ジャズ', e: 'jazu', k: '재즈' },
                { t: 'ジャケット', e: 'jaketto', k: '재킷' },
            ],
        },
        {
            kana: 'ジュ',
            eng: 'ju',
            kor: '쥬',
            words: [
                { t: 'ジュース', e: 'ju-su', k: '주스' },
                { t: 'ジュニア', e: 'junia', k: '주니어' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ジョ',
            eng: 'jo',
            kor: '죠',
            words: [
                { t: 'ジョギング', e: 'jogingu', k: '조깅' },
                { t: 'ジョーク', e: 'jo-ku', k: '농담' },
                { t: '-', e: '-', k: '-' },
            ],
        },

        {
            kana: 'ビャ',
            eng: 'bya',
            kor: '뱌',
            words: [
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ビュ',
            eng: 'byu',
            kor: '뷰',
            words: [
                { t: 'ビューティー', e: 'byu-ti-', k: '뷰티' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ビョ',
            eng: 'byo',
            kor: '뵤',
            words: [
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },

        {
            kana: 'ピャ',
            eng: 'pya',
            kor: '퍄',
            words: [
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ピュ',
            eng: 'pyu',
            kor: '퓨',
            words: [
                { t: 'ピュア', e: 'pyua', k: '퓨어(순수)' },
                { t: 'ピューマ', e: 'pyu-ma', k: '퓨마' },
                { t: '-', e: '-', k: '-' },
            ],
        },
        {
            kana: 'ピョ',
            eng: 'pyo',
            kor: '표',
            words: [
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
                { t: '-', e: '-', k: '-' },
            ],
        },
    ],
};

const hiraganaData =
    typeof defaultData !== 'undefined' ? defaultData.hiragana : [];
const katakanaData =
    typeof defaultData !== 'undefined' ? defaultData.katakana : [];

let currentData = hiraganaData;
let currentItem = null;
let studyCounts = {};
let isReverseMode = false;
let isDrawing = false;
let isFlipping = false;
let startX, startY;

const card = document.getElementById('card');
const frontText = document.getElementById('front');
const wordListEl = document.getElementById('word-list');
const hiraBtn = document.getElementById('hiragana-btn');
const kataBtn = document.getElementById('katakana-btn');
const readModeBtn = document.getElementById('read-mode-btn');
const writeModeBtn = document.getElementById('write-mode-btn');
const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');

function setExerciseMode(isWrite) {
    isReverseMode = isWrite;

    if (isReverseMode) {
        writeModeBtn.classList.add('active');
        readModeBtn.classList.remove('active');
    } else {
        readModeBtn.classList.add('active');
        writeModeBtn.classList.remove('active');
    }

    fadeOutCanvas();
    nextCard();
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    startX = e.clientX;
    startY = e.clientY;
    updateCanvasStyle();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
});

canvas.addEventListener('mouseup', (e) => {
    isDrawing = false;
    const diffX = Math.abs(e.clientX - startX);
    const diffY = Math.abs(e.clientY - startY);
    if (diffX < 5 && diffY < 5) {
        handleCardFlip();
    }
});

function handleCardFlip() {
    if (isFlipping) return;

    if (card.classList.contains('flipped')) {
        isFlipping = true;
        fadeOutCanvas();
        nextCard();
        setTimeout(() => {
            isFlipping = false;
        }, 300);
    } else {
        isFlipping = true;
        card.classList.add('flipped');
        wordListEl.classList.add('show');
        if (currentItem) speak(currentItem.kana);
        setTimeout(() => {
            isFlipping = false;
        }, 600);
    }
}

function pickRandomCard() {
    const available = currentData.filter(
        (item) => (studyCounts[item.kana] || 0) < 20,
    );

    if (available.length === 0) {
        frontText.textContent = '🎉';
        wordListEl.innerHTML =
            '<div style="text-align:center; color:#999; margin-top:20px;">학습 완료!</div>';
        return;
    }

    currentItem = available[Math.floor(Math.random() * available.length)];

    canvas.classList.add('active');
    if (
        canvas.width !== window.innerWidth ||
        canvas.height !== window.innerHeight
    ) {
        resizeCanvas();
    }

    if (!isReverseMode) {
        frontText.textContent = currentItem.kana;
        frontText.style.fontSize = '7rem';
    } else {
        frontText.textContent = currentItem.eng;
        frontText.style.fontSize = currentItem.eng.length > 3 ? '4rem' : '5rem';
    }

    const backFace = document.querySelector('.face.back');
    backFace.innerHTML = `
        <div class="answer-group">
            <div class="back-kana">${currentItem.kana}</div> 
            <div class="eng">${currentItem.eng}</div>
            <div class="kor">${currentItem.kor}</div>
        </div>
        <div class="progress-inner">
            <div class="progress-bg"><div class="progress-bar"></div></div>
            <div class="pg-text">0 / 20</div>
        </div>
        <div class="tap-guide">Next Card</div>
    `;

    wordListEl.innerHTML = '';
    if (currentItem.words) {
        currentItem.words.forEach((word) => {
            if (!word.t || word.t === '-') return;
            const div = document.createElement('div');
            div.className = 'word-item';
            div.innerHTML = `
            <div class="word-text-group">
                <span class="word-text">${word.t}</span>
                <span class="word-eng">${word.e.toLowerCase()}</span> 
            </div>
            <span class="word-kor">${word.k}</span>
        `;
            div.addEventListener('click', (e) => {
                e.stopPropagation();
                speak(word.t);
            });
            wordListEl.appendChild(div);
        });
    }
    updateProgress(currentItem.kana);
}

function updateProgress(charKey) {
    let count = studyCounts[charKey] || 0;
    const percent = (count / 20) * 100;
    document.querySelectorAll('.progress-bar').forEach((bar) => {
        bar.style.width = `${percent}%`;
    });
    document.querySelectorAll('.pg-text').forEach((text) => {
        text.textContent = `${count} / 20`;
    });
}

function nextCard() {
    if (currentItem) {
        studyCounts[currentItem.kana] = Math.min(
            (studyCounts[currentItem.kana] || 0) + 1,
            20,
        );
    }
    card.classList.remove('flipped');
    wordListEl.classList.remove('show');
    setTimeout(pickRandomCard, 300);
}

function fadeOutCanvas() {
    canvas.style.transition = 'opacity 0.4s ease';
    canvas.style.opacity = '0';
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over';
        canvas.style.transition = 'none';
        canvas.style.opacity = '1';
    }, 400);
}

function updateCanvasStyle() {
    const themeColor = document.body.classList.contains('katakana-mode')
        ? '#e17055'
        : '#8e44ad';
    ctx.strokeStyle = themeColor;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = 0.5;
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    updateCanvasStyle();
}

function createFloatingChars() {
    const zone = document.getElementById('bg-floating-zone');
    if (!zone) return;
    zone.innerHTML = '';
    const hiraChars =
        'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';
    const kataChars =
        'アイウエオカキクケコサシスセソタチツテトナ니ヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const hiraColor = '142, 68, 173';
    const kataColor = '225, 112, 85';

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const isHira = i % 2 === 0;
            const charSpan = document.createElement('span');
            charSpan.classList.add('floating-char');
            const targetChars = isHira ? hiraChars : kataChars;
            const targetColor = isHira ? hiraColor : kataColor;
            charSpan.innerText =
                targetChars[Math.floor(Math.random() * targetChars.length)];
            charSpan.style.left = `${Math.random() * 100}%`;
            charSpan.style.animationDuration = `${12 + Math.random() * 25}s`;
            charSpan.style.animationDelay = `${Math.random() * -30}s`;
            charSpan.style.fontSize = `${1 + Math.random() * 3}rem`;
            charSpan.style.color = `rgba(${targetColor}, ${0.06 + Math.random() * 0.12})`;
            zone.appendChild(charSpan);
            charSpan.addEventListener('animationiteration', () => {
                charSpan.innerText =
                    targetChars[Math.floor(Math.random() * targetChars.length)];
                charSpan.style.left = `${Math.random() * 100}%`;
            });
        }, i * 50);
    }
}

function speak(text) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'ja-JP';
    window.speechSynthesis.speak(msg);
}

function init() {
    resizeCanvas();
    pickRandomCard();
    createFloatingChars();
    const helpBtn = document.getElementById('help-btn');
    helpBtn.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    hiraBtn.addEventListener('click', () => {
        document.body.classList.remove('katakana-mode');
        currentData = hiraganaData;
        hiraBtn.classList.add('active');
        kataBtn.classList.remove('active');
        setExerciseMode(false);
    });

    kataBtn.addEventListener('click', () => {
        document.body.classList.add('katakana-mode');
        currentData = katakanaData;
        kataBtn.classList.add('active');
        hiraBtn.classList.remove('active');
        setExerciseMode(false);
    });
    readModeBtn.addEventListener('click', () => setExerciseMode(false));
    writeModeBtn.addEventListener('click', () => setExerciseMode(true));
}

window.addEventListener('resize', resizeCanvas);
window.onload = init;
