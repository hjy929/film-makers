$(document).ready(function(){
    /////////////*********슬라이드 파트**********////////////////////\
    setInterval(function(){
    var $first = $("main ul li").first();
    console.log($first);
    $("main ul").animate({"margin-left":"-100%"}, 1000, function(){
        $("main ul").append($first).css("margin-left", "0");
    });
    }, 5000);



    /////////////*********movie**********////////////////////
    var movies_arr = [
        ["cont_01.png", "죄 많은 소녀 (After My Death, 2019)"],
        ["cont_02.jpeg", "소공녀 (Microhabitat, 2020)"],
        ["cont_03.jpg", "벌새 (House of Hummingbird, 2018)"],
    ];

    var movieCont = `
    <div class="movie_box">
        <div class="movie">
            <div class="playBtn"></div>
        </div>
        <p></p>
    </div>
    `;

    for(i=0; i < movies_arr.length; i++){
        $("#movies .wrap .flex_b").append(movieCont);
    };

    $("#movies .movie_box").each(function(a){
        $(this).find(".movie").css("background-image", "url(./img/"+ movies_arr[a][0] +")");

        $(this).find("p").text(movies_arr[a][1]);
    });


    /////////////*********actor**********////////////////////
    var actor_arr = [
        ["yeobeen.png", "전여빈"],
        ["saebyeok.png", "김새벽"],
        ["sanghee.png", "이상희"],
        ["yeeun.png", "김예은"],
        ["hakju.png", "이학주"],
        ["jungmin.png", "박정민"],
    ];

    var actorCont = `
    <div class="actor_box">
        <div class="dark">
            <p>전여빈</p>
            <a href="">필모그래프</a>
        </div>
    </div> 
    `;

    for(i=0; i < actor_arr.length; i++){
        $("#actor .wrap .flex_b").append(actorCont);
    }

    $("#actor .actor_box").each(function(b){
        $(this).css("background-image", "url(./img/"+ actor_arr[b][0] +")")
        $(this).find(".dark p").text(actor_arr[b][1]);
    });


    /////////////*********탭버튼**********////////////////////
    $("#reviewes .checked button").click(function(){
        var $index = $(this).index();
        console.log($index);

        $("#reviewes .checked button").removeClass("activeBtn");
        $(this).addClass("activeBtn");

        $("#reviewes .tab_reviewes .tab_box").removeClass("activeCont");
        $("#reviewes .tab_reviewes .tab_box").eq($index).addClass("activeCont");

        $("#reviewes .checked button").css("background", "#555");
        $(this).css("background", "#fff");

        return false;
    });
















});