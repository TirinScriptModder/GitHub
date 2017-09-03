function main(){
	print('読み込み成功');
}
(function(){
	main();
	ModPE.setItem(1000,'diamond',0,'偽物のダイアモンド',64);
	Player.addItemCreativeInv(1000,1,0);
})();
function newLevel(){
	clientMessage('読み込めてるよ');
}
