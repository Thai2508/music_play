
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cd = $('.cd');
const nameSong = $('header h2');
const bgSong = $('.cd-thumb');
const audio = $('#audio');
const bntPlay = $('.btn-toggle-play');
const playing = $('.player');
const progress = $('#progress');
const btnPrev = $('.btn-prev');
const btnNext = $('.btn-next');
const btnRandow = $('.btn-random');
const btnRepeat = $('.btn-repeat');
const playList = $('.playlist');
console.log(cd)

const app = {
    currentIndex : 0,
    isPlaying: false,
    isRepeat: false,
    id : 0,
    // isChangeTime: false,

    // list's songs
    songs : [
        {
            
            name : 'Tự tình',
            single : 'Quang Huy',
            path : './assets/musics/TuTinh-QuangHuy-6026204.mp3',
            img : './assets/imgs/tutinh.jpg'
        },
    
        {
            
            name : 'Chờ ngày mưa tan',
            single : 'Noo & Tony',
            path : './assets/musics/chongaymuatan.mp3',
            img : './assets/imgs/chongaymuatan.jpg'
        },

        {
            name : 'Bông hoa đẹp nhất',
            single : 'Quân AP',
            path : './assets/musics/bonghoadepnhat.mp3',
            img : './assets/imgs/bonghoadepnhat.jpg'
        },
    
        {
            name : '3107-2',
            single : 'Dương & W/n & Nâu',
            path : './assets/musics/3107-2.mp3',
            img : './assets/imgs/3107-2.jpg'
        },

        {
            name : 'Bức tranh từ nước mắt',
            single : 'Mr Siro',
            path : './assets/musics/buctranhtunuocmat.mp3',
            img : './assets/imgs/buctranhtunuocmat.jpg'
        },
    
        {
            name : 'Anh chẳng sao mà',
            single : 'Khang Việt',
            path : './assets/musics/anhchangsaoma.mp3',
            img : './assets/imgs/achangsaoma.jpg'
        },

        {
            name : 'Chưa bao giờ',
            single : 'Trung Quân',
            path : './assets/musics/chuabaogio.mp3',
            img : './assets/imgs/chuabaogio.jpg'
        },
    
        {
            name : 'Có ai ở đây không',
            single : '14 Casper ft Bon',
            path : './assets/musics/coaiodayko.mp3',
            img : './assets/imgs/coaiodayko.jpg'
        },

        {
            name : 'Đổi thay',
            single : 'Hồ Quang Hiếu',
            path : './assets/musics/doithay.mp3',
            img : './assets/imgs/doithay.jpg'
        },

        {
            name : 'Đông kiếm em',
            single : 'Vũ',
            path : './assets/musics/dongkiemem.mp3',
            img : './assets/imgs/dongkiemem.jpg'
        },

        {
            name : 'Già cùng nhau là được',
            single : 'Tea & PC',
            path : './assets/musics/giacungnhauladc.mp3',
            img : './assets/imgs/giacungnhauladc.jpg'
        },

        {
            name : '2 chữ đã từng',
            single : 'Như Việt',
            path : './assets/musics/haichudatung.mp3',
            img : './assets/imgs/haichudatung.jpg'
        },

        {
            name : 'Ít nhưng dài lâu',
            single : 'Yan Nguyễn',
            path : './assets/musics/itnhungdailau.mp3',
            img : './assets/imgs/itnhungdailau.jpg'
        },

        {
            name : 'Yêu như ngày cuối cùng',
            single : 'Mai Tiến Dũng',
            path : './assets/musics/iunhungaycuoicung.mp3',
            img : './assets/imgs/iunhungaycuoicung.jpg'
        },

        {
            name : 'Không đáng để thương',
            single : 'Đinh Tùng Huy',
            path : './assets/musics/khongdangdethuong.mp3',
            img : './assets/imgs/khongdangdethuong.jpg'
        },

        {
            name : 'Liệu giờ',
            single : '2T x Văn',
            path : './assets/musics/lieugio.mp3',
            img : './assets/imgs/lieugio.jpg'
        },

        {
            name : 'Mưa trong lòng',
            single : 'Trịnh Đình Quang',
            path : './assets/musics/muatronglong.mp3',
            img : './assets/imgs/muatronglong.jpg'
        },

        {
            name : 'Nợ ai đó lời xin lỗi',
            single : 'Bozitt',
            path : './assets/musics/noaidoloixinloi.mp3',
            img : './assets/imgs/noaidoloixinloi.jpg'
        },

        {
            name : 'Phố không em',
            single : 'Thái Đinh',
            path : './assets/musics/phokoem.mp3',
            img : './assets/imgs/phokoem.jpg'
        },

        {
            name : 'Từ bỏ',
            single : 'Khắc Việt',
            path : './assets/musics/tubo.mp3',
            img : './assets/imgs/tubo.jpg'
        },

        {
            name : 'Từng yêu',
            single : 'Phan Duy Anh',
            path : './assets/musics/tungyeu.mp3',
            img : './assets/imgs/tungyeu.jpg'
        },

        {
            name : 'Xin lỗi vì đã yêu nhau',
            single : 'Hoài Lâm',
            path : './assets/musics/xinloividaiunhau.mp3',
            img : './assets/imgs/xinloividaiunhau.jpg'
        },
    ],

    // render with playlist
    render: function() {
        const htmls = this.songs.map((m,index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''} " data-index="${index}">
                <div class="thumb" style="background-image: url('${m.img}')">
                </div>
                <div class="body">
                    <h3 class="title">${m.name}</h3>
                    <p class="author">${m.single}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('');
        
        
    },

    // Định nghĩa
    defindPropertys: function() {
        Object.defineProperty(this, "currentSong", {
            get : function() {return this.songs[this.currentIndex];}
        })
    },

    // Handle evens
    handle: function(){
        const _this = this;
        const cdWidth = cd.offsetWidth;

        // add animate to cd-thum
        const cdRotate = cd.animate([
            { transform : 'rotate(360deg)' }
        ],{
            duration : 17000,
            iterations : Infinity
        })
        cdRotate.pause();
        
        // Handle zoom
        document.onscroll = function() {
            const sTop = document.documentElement.scrollTop || window.scrollY;
            const cdNewWidth = cdWidth - sTop;

            cd.style.width = cdNewWidth > 0 ? cdNewWidth + 'px' : 0;
            cd.style.opacity = cdNewWidth / cdWidth;
        }

        // Handle when click play
        bntPlay.onclick = function() {
           if (_this.isPlaying) {
            audio.pause();
           }
           else  {audio.play();}
        }

        // playing
        audio.onplay = function() {
            _this.isPlaying = true;
            playing.classList.add('playing');
            cdRotate.play();
        }

        // is Paused
        audio.onpause = function() {
            _this.isPlaying = false;
            playing.classList.remove('playing');
            cdRotate.pause();
        }

        // Ranger run with time
        audio.ontimeupdate = function(){
            // Active Ranger
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime/audio.duration * 100);
                progress.value = progressPercent;
            }

            // When finish Song
            if (audio.duration === audio.currentTime){
                if (_this.isRepeat === true) {
                    audio.currentTime = 0;
                    audio.play();
                } else {
                    _this.nextSong();
                    audio.play();
                    _this.activeSong();
                    this.scrollIntoView();
                }
            }
        }

        // Handle when click change potion ranger
        progress.onchange = function(e){
            const timeSong = audio.duration / 100 * e.target.value;
            audio.currentTime = timeSong;
            audio.play();
        }

        // Handle when click btn Next
        btnNext.onclick = function() {
            _this.nextSong();
            audio.play();
        }

         // Handle when click btn Previous
        btnPrev.onclick = function() {
            _this.prevSong();
            audio.play();
        }

        // Handle when click btn Randow
        btnRandow.onclick = function() {
            _this.currentIndex = 0;
            _this.randowSong();            
            audio.play();
        }

        //  Handle when click btn Repeat
        btnRepeat.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            btnRepeat.classList.toggle('active', _this.isRepeat);
        }

        // Click song
        playList.onclick = function(e) {
            const song = e.target.closest('.song:not(.active)');
            const option = e.target.closest('.option');
            if (song || option){
                if (song) {
                    _this.currentIndex = Number(song.dataset.index);
                    _this.loadSong();
                    _this.activeSong();
                    audio.play();
                }
                if (option) {console.log('OK');}
            }
        }

    },

    // load current Song
    loadSong: function() {
        nameSong.textContent = this.currentSong.name;
        bgSong.style.backgroundImage = `url('${this.currentSong.img}') `;
        audio.src = this.currentSong.path;
    },

    // Prev song
    prevSong: function(){
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadSong();
        this.activeSong();
        this.scrollIntoView();
    },

    // Next song
    nextSong: function(){
        this.currentIndex++;
        if (this.currentIndex === this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadSong();
        this.activeSong();
        this.scrollIntoView();
    },

    // Randow song
    randowSong: function(){
        var lengthSongs = this.songs.length;
        var containersongs1 = [];
        var containersongs2 = [];
        var j=0;
        while (j < lengthSongs) {
            var songsrandow = Math.floor(Math.random() * lengthSongs);            
            if (containersongs1.includes(songsrandow) === false) {
                containersongs1[j] = songsrandow;
                containersongs2[j] = this.songs[containersongs1[j]];
                j++;
            }
        }
        for (var i=0; i<lengthSongs; i++){
           this.songs[i] = containersongs2[i];
        }
        this.loadSong();
        this.render();
        console.log(containersongs2)
    },

    // Scroll into view
    scrollIntoView: function(){
       setTimeout(() => {
        $('.song.active').scrollIntoView({
            behavior : 'smooth',
            block : 'center'
        })
       },300)
    },

    // Active song
    activeSong: function(){
        var listsong = $$(".song")
        listsong.forEach((song,index) => {
            if(this.currentIndex === index){
                $(".song.active").classList.remove("active")
                song.classList.add("active")
                return
            }
        })
    },


    // Start app
    start: function() {

        this.render();

        this.defindPropertys();

        this.handle();

        this.loadSong();

    }

}

app.start();
