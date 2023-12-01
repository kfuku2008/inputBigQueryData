//★実行前にGASのプロジェクト画面左にある「サービス」から「Big Query API」を選択して追加しておく

function queryBigQuery() {

    // クエリを実行するGCPのプロジェクトIDを指定する(BQ管理画面の実行するデータセットに対し詳細を開いて確認(右クリック?))
    const projectId = ``;//``内にプロジェクトIDを入れる
 
    // 実行するクエリを設定する
    const query = ``;//``内にクエリを入れる

    // リクエストの宣言
    const request = {
      query: query,
      useLegacySql: false
    };

    // クエリを実行し、結果を取得する
    const queryResults = BigQuery.Jobs.query(request, projectId);

    // 結果をスプレッドシートに書き込む(rowsの中に含まれているデータだけ取り出す)
    const result_rows = queryResults.rows;

    //データが取れているか確認
    Logger.log(result_rows)

    // クエリ抽出結果をリストへ格納する(26~37のコメントアウトを外せば確認できる)
    // const data = [];
    // // result_rows配列の中身を1つずつ取り出して、変数rowに代入するループ処理をさせる
    // for (let i = 0; i < result_rows.length; i++) {
    //   const row = result_rows[i];
    //   const values = row.f.map(function(field) {
    //     return field.v;
    //   });
    //   // リストへ追加する
    //   values.push(formattedDate);
    //   data.push(values);
    // }
    //Logger.log(data)    
}