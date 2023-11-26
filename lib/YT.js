import ytdl from 'ytdl-core';
import readline from 'readline';
import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import { randomBytes } from 'crypto';
const ytIdRegex =
  /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/;

class YT {
  constructor() {}
  /**
   * is Youtube URL?
   * @param {string|URL} url youtube url
   * @returns Returns true if the given YouTube URL.
   */
  static isYTUrl = (url) => {
    return ytIdRegex.test(url);
  };

  /**
   * get video id from url
   * @param {string|URL} url the youtube url want to get video id
   * @returns
   */
  static getVideoID = (url) => {
    if (!this.isYTUrl(url)) throw new Error("is not YouTube URL");
    return ytIdRegex.exec(url)[1];
  };

  /**
   * Download YouTube to mp3
   * @param {string|URL} url YouTube link want to download to mp3
   * @copyright Darlyn1234
   * @returns
   */
  static mp3 = async (url) => {
    try {
      if (!url) throw new Error("Video ID or YouTube Url is required");
      url = this.isYTUrl(url)
        ? "https://www.youtube.com/watch?v=" + this.getVideoID(url)
        : url;
      const { videoDetails } = await ytdl.getInfo(url, { lang: "id" });
      let stream = ytdl(url, { filter: "audioonly", quality: 140 });
      let songPath = `./tmp/${randomBytes(3).toString("hex")}.mp3`;

      let starttime;
      stream.once("response", () => {
        starttime = Date.now();
      });
      stream.on("progress", (chunkLength, downloaded, total) => {
        const percent = downloaded / total;
        const downloadedMinutes = (Date.now() - starttime) / 1000 / 60;
        const estimatedDownloadTime =
          downloadedMinutes / percent - downloadedMinutes;
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(`${(percent * 100).toFixed(2)}% downloaded `);
        process.stdout.write(
          `(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(
            total /
            1024 /
            1024
          ).toFixed(2)}MB)\n`,
        );
        process.stdout.write(
          `running for: ${downloadedMinutes.toFixed(2)}minutes`,
        );
        process.stdout.write(
          `, estimated time left: ${estimatedDownloadTime.toFixed(2)}minutes `,
        );
        readline.moveCursor(process.stdout, 0, -1);
      });
      stream.on("end", () => process.stdout.write("\n\n"));
      stream.on("error", (err) => console.log(err));

      const file = await new Promise((resolve) => {
        ffmpeg(stream)
          .audioFrequency(44100)
          .audioChannels(2)
          .audioBitrate(320)
          .audioCodec("libmp3lame")
          .audioQuality(5)
          .toFormat("mp3")
          .save(songPath)
          .on("end", () => {
            resolve(songPath);
          });
      });
      return {
        meta: {
          channelUrl: videoDetails.author.channel_url,
          views: videoDetails.viewCount,
          category: videoDetails.category,
          id: videoDetails.videoId,
          url: videoDetails.video_url,
          publicDate: videoDetails.publishDate,
          uploadDate: videoDetails.uploadDate,
          keywords: videoDetails.keywords,
          title: videoDetails.title,
          channel: videoDetails.author.name,
          seconds: videoDetails.lengthSeconds,
          image: videoDetails.thumbnails.slice(-1)[0].url,
        },
        path: file,
        size: fs.statSync(songPath).size,
      };
    } catch (error) {
      throw error;
    }
  };
}

export default YT;