<?php

//ログを取るか
ini_set('log_errors','on');
//ログの出力ファイルを指定
ini_set('error_log','php.log');

//デバッグフラグ
$debug_flg = true;
//デバッグログ関数
function debug($str){
  global $debug_flg;
  if(!empty($debug_flg)){
    error_log('デバッグ：'.$str);
  }
}

debug('mailsed.phpを読み込みました');

// エラーメッセージ を定数に格納しておく
define('MSG01','入力必須です');

// エラーメッセージ 格納用の配列
$err_msg = array();

// 送信完了メッセージ格納用
$complete_msg = '';

// --------------------------------
//  関数
// --------------------------------
//　サニタイズ
function sanitize($str){
    return htmlspacialchars($str, ENT_QUOTES);
}

//　未入力チェック
function validRequierd($str, $key){
    if($str === ''){
        global $err_msg;
        $err_msg[$key] = MSG01;
    }
}
// 最大文字数チェック
// Email形式チェック
//
//

// POST送信があれば実行する
if(!empty($POST)){
    debug('POST送信があります');
    $name = (isset($POST['name']))? $POST['name']: '';
    $email = (isset($POST['email']))? $POST['email']: '';
    $msg = (isset($POST['msg']))? $POST['msg']: '';

    debug('$name '.$name);
    debug('$email '.$email);
    debug('$msg '.$msg);

    // 未入力チェック
    validRequired($name, 'name');
    validRequired($email, 'email');
    validRequired($msg, 'msg');
    // 最大文字数チェック
    // validMaxLen($name, 'name', 100);

    if(empty($err_msg)){
        // 送信先メールアドレス
        $to = 'ruu703@yahoo.co.jp'; 
        $headers = "From: ". $email ."\r\n";
        $subject = 'ポートフォリオサイトからのお問い合わせ';

        // 本文の最後に名前を追加
        $msg .= "\r\n\r\n". $name;

        // メール送信
        wp_mail($to, $subject, $msg, $headers);

        // 送信完了メッセージ
        $complete_msg = '送信しました';

        $name = '';
        $email = '';
        $msg = '';

    }
}else{
    debug('POST送信はありません');
}

?>