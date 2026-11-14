version = 15

dependencies {
    implementation("androidx.appcompat:appcompat:1.7.0")
}

cloudstream {
    description = "Anime from AniSuge with Sub and Dub support"
    authors = listOf("abidstreaming")

    status = 1
    tvTypes = listOf(
        "Anime",
        "AnimeMovie",
        "OVA"
    )
    iconUrl = "https://animesuge.cz/animesuge/images/logo.png"
}
