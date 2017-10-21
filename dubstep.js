function songDecoder(song) {
  console.log(song.replace(/WUB/g, " ").trim());
}

songDecoder("AWUBBWUBC");
songDecoder("AWUBWUBWUBBWUBWUBWUBC");
songDecoder("WUBAWUBBWUBCWUB");
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");
