

TH.Result = function(){
    
};

TH.Result.prototype = 
{
    init: function()
    {
    },
    preload: function()
    {
    }, 
    create: function()
    {      
        var bg = game.add.image(game.world.centerX, game.world.centerY, 'bg');
        bg.anchor.set(0.5);
        var score_bg = game.add.image(game.world.centerX, 150, 'score_bg');
        score_bg.anchor.set(0.5);
        var style = { font: "85px Tahoma", fill: "#ffffff", align: "center" };
        var scoreText = game.add.text(game.world.centerX, 150, TH.score, style);
        scoreText.anchor.set(0.5);
        scoreText.x = score_bg.x;
        scoreText.y = score_bg.y;

        var shareOnFB = game.add.image(game.world.centerX, game.world.centerY + 30, 'button');
        shareOnFB.anchor.set(0.5);
        shareOnFB.scale.setTo(2, 2);
        var buttonStyle = { font: "40px Tahoma", fill: "#ff0044", align: "center" };
        var shareFBText = game.add.text(game.world.centerX, 90, 'Share điểm trên FB', buttonStyle);
        shareFBText.anchor.set(0.5);
        shareFBText.x = shareOnFB.x;
        shareFBText.y = shareOnFB.y;
        shareOnFB.inputEnabled = true;
        shareOnFB.events.onInputDown.add(this.onClickShareOnFB, this);

        var shareWithFriend = game.add.image(game.world.centerX, game.world.centerY + 230, 'button');
        shareWithFriend.anchor.set(0.5);
        shareWithFriend.scale.setTo(2, 2);
        var shareWFText = game.add.text(game.world.centerX, 90, 'Share game để chơi tiếp', buttonStyle);
        shareWFText.anchor.set(0.5);
        shareWFText.x = shareWithFriend.x;
        shareWFText.y = shareWithFriend.y;
        shareWithFriend.inputEnabled = true;
        shareWithFriend.events.onInputDown.add(this.onClickShareWF, this);

        var nhanqua = game.add.image(game.world.centerX, game.world.centerY + 460, 'button');
        nhanqua.anchor.set(0.5);
        nhanqua.scale.setTo(2, 2);
        var nhanquaText = game.add.text(game.world.centerX, 90, 'Nhận quà', buttonStyle);
        nhanquaText.anchor.set(0.5);
        nhanquaText.x = nhanqua.x;
        nhanquaText.y = nhanqua.y;
        nhanqua.inputEnabled = true;
        nhanqua.events.onInputDown.add(this.onClickNhanQua, this);
    },
    onClickShareOnFB: function()
    {
        FB.ui({
            method: 'share',
            href: 'https://zzvutienhung.github.io/Kichi/',
            display: 'popup'
          }, function(response){});
    },
    onClickShareWF: function()
    {
        FB.ui({
            method: 'share',
            href: 'https://zzvutienhung.github.io/Kichi/',
            display: 'popup'
          }, function(response){
                game.state.start('Gameplay');
          });
    },
    onClickNhanQua: function()
    {
        var request = {};
        request["eventKey"] = "KICHI_HIGHSCORE_LB";
        request["HIGHSCORE"] = TH.score
        gamesparks.sendWithData("LogEventRequest", request, function(response){
            console.log('response ' + response);
        });
    }
};


