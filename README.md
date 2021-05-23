# Kobo-Logic

## 準備

以下のコマンドで units へのパスを通す

```$
$ source setup.sh
```

## コマンド

### bin2dec.sh

２進数を１０進数に変換

```
$ bin2dec.sh 11
3
```

### dec2bin.sh

１０進数を２進数に変換

```
$ bin2dec.sh 3
11
```

### load.sh

ファイルからデータ読み込む

```
$ load.sh A-Register
11
```

### store.sh

データをファイルに書き込む

```
$ store.sh A-Register 11
```

### nand.sh

nand 演算を行う

```
$ nand.sh 110 111
11111001
```

### rotate.sh

左ローテート 演算を行う

```
$ rotate.sh 100
00001000
```
