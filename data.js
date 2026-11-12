// ===== Shadows Saga データファイル =====
const chapters = [
  {
    vol: "第1巻：Dawn Beyond Shadows",
    title: "第1巻 もくじ・プロローグ",
    song: "Dawn Beyond Shadows (OP#)",
    mp3: "",
    lyrics: `灰の中から目覚め 鎖を断ち切れ\n炎の中で 運命を刻む\n闇の彼方から 呼ぶ声が\n導くんだ Dawn Beyond Shadows\n\nもう恐れない 痛みさえも\n嵐を超えて We rise again\n\nDawn beyond shadows, 燃え上がれ\n闇を裂き 未来を掴め\n声を上げて 信じる限り\nThis is our destiny！`,
    content: `
      <p class="no-indent" style="text-align: center; color: var(--accent-gold); font-weight: bold; margin-bottom: 2em; font-size: 1.15rem; line-height: 2.2;">
        抗い続ける者たちへ…<br>
        …光を信じ、闇を裂け！<br>
        闇の彼方に暁は訪れる<br>
        ──その手で掴め、未来を！<br><br>
        Dawn Beyond Shadows<br>
        ～暁の彼方へ～
      </p>
      <hr style="border:0; border-top: 1px solid var(--border-color); margin: 25px 0;">
    `
  },
  {
    vol: "第1巻：Dawn Beyond Shadows",
    title: "1# 黎明",
    song: "Ember!",
    mp3: "",
    lyrics: `"Once, melodies ruled the sky...\nNow, shadows choke the final note...\nBut in the ruins─a spark screams!!"\n\n錆びたオルゴール 針は止まった\n闇に奪われた 調べの翼\nDon't fade... 震える旋律\n灰の中の Emberの灯火\n\n燃え上がれ!、Ember!\nBreak the chains! 紅蓮のStage\n沈黙を切り裂く 歌のヤイバ`,
    content: `
      <p>かつて、世界は「光」と呼ばれるエネルギーで満ち、人々は音楽と共に平和に暮らしていた。だが、その均衡は突如として崩れた。</p>
      <p>——影の勢力——<br>光を憎み、世界を闇で覆い尽くそうとする者たち。輝いていた街は廃墟と化し、音楽は静寂に呑み込まれた。</p>
      <p>しかし、闇に抗う歌の戦士「BABYMETAL」——スーメタル、モアメタル、ユイメタルがいた。彼女たちを支えるマークメタルと小型AI「すぅちゃん」。だが影の支配者ルマンドX、響、紅白、そして冷徹なサヤメタ率いるメタル四天王の影が迫っていた。</p>
      <div class="preview-box">次回、第2話『交戦』。荒廃した都市で激突！ 君は、刻の涙を見る。</div>
    `
  },
  {
    vol: "第1巻：Dawn Beyond Shadows",
    title: "2# 交戦",
    song: "Light of Resistance",
    mp3: "",
    lyrics: `Stand and fight, warriors of light!\nBurning bright, we’ll end the night!\nRaise your voice for the light of resistance!\n闇を越え、新たな時代へ\nRaise your blade for the light of resistance!\n絆を胸に、勝利を掴め！`,
    content: `
      <p>廃墟の都市。「影の勢力が集結している……ここが正念場だな。」マークメタルが背中の長刀・蛍丸に手を掛ける。「やるっきゃないね！」モアメタルが拳を握る。</p>
      <p>影の軍勢との激闘。スーメタルの光の波動、モアとユイの連撃、そしてマークの蛍丸の一閃が闇を薙ぎ払う！ だが四天王との決戦はまだこれからだった。</p>
      <div class="preview-box">モアメタルDEATH🤘。第3話『脅威』！ プッチャキツネアーップ！🤘🤘アーーーーッ！</div>
    `
  },
  {
    vol: "第1巻：Dawn Beyond Shadows",
    title: "10# 蛍丸",
    song: "影の円舞曲",
    mp3: "https://files.catbox.moe/phvkwp.mp3",
    lyrics: `闇の帳 揺れる灯 影に溶けたこの身を\n無心で振るう 刃の先 迷いを斬れるか\n冷えた刃 鈍く光り 空を裂いて 音が鳴る\n剣の舞 影に溶け ただの器になればいい\nそう思うたび 揺らめくのは この手が知る 熱\n刀を納める 静寂 鞘に消える余韻の音\n問うことすら 赦されぬ 影は揺れながら`,
    content: `
      <p>暗黒の城の一室。サヤメタは蛍丸を抜き、無心で型を振るう。だが振るうたびに胸が疼く。「（私がこれまで斬ってきたものは何だったのか？ 考えるな、感じろ。）」</p>
      <p>——キーン——。納刀の静寂の中、彼女は小さく呟いた。「——出てくる。」影の城を後にした。</p>
      <div class="preview-box">静寂の森で、己の存在を問い続けるッ！！ 第11話『遭遇』</div>
    `
  },
  {
    vol: "第1巻：Dawn Beyond Shadows",
    title: "15# 折紙",
    song: "Wings of Peace ~平和の翼~",
    mp3: "",
    lyrics: `闇の中で 迷い続けた 光を求めて 歩いてきた\n鶴のように羽ばたいて 新しい空を描こう\nWings of Peace 闇の先 光が待つ世界へ`,
    content: `
      <p>焚き火の前で影折を美しい折鶴へと折り直すサヤメタ。スーメタルが真剣に折ったものは謎のカニだった。「それカニじゃね？」「なめたら…いかんぜよ。」サヤメタは呟く。「（こっちの方が難しいのに……恐ろしい子。）」</p>
      <div class="preview-box">光と影、それぞれの想いが交錯する時——『共鳴』 見て見て見てねー！！</div>
    `
  },
  {
    vol: "第1巻：Dawn Beyond Shadows",
    title: "31# 由結",
    song: "Into the Light",
    mp3: "",
    lyrics: `We’ll sing, we’ll shine, we fade into the light\nあの日交わした笑顔を胸に\n手を取り合った瞬間忘れない\n「また会える、その日まで」`,
    content: `
      <p>ツインテールのシュシュを外し、蛍丸の柄に結ぶユイメタル。「サヤメタさんに、あげる。憧れのスーちゃんを真似してポニーテールにするから、ひとつ余るんだ。」夢のために旅立つ由結を見送る二人。</p>
      <div class="preview-box">『暁光』 二人きりになったBABYMETALの、明日はどっちだ？</div>
    `
  },
  {
    vol: "第2巻：Shadows of Rebellion",
    title: "30# 決意",
    song: "Back to the Quest",
    mp3: "",
    lyrics: `迷わず進め 振り返らずに 光の先へ 闇を裂いて\nThis is our quest, we won't break away`,
    content: `
      <p>決戦の朝。ご褒美トーク（寿司、ケーキ、温泉）のあと、サヤメタがボソッと言う。「……カニ食べ」「「カニかいー！！🦀（笑）」」スー（またツッコミのタイミングを逃した…）。四人は歩み出す。</p>
      <div class="preview-box">決戦へ向けて進む四人。次回、『追撃』！</div>
    `
  }
];