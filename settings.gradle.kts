rootProject.name = "CloudstreamPlugins"

// Toolchain auto-provisioning: lets Gradle download Java 17 if not installed locally
plugins {
    id("org.gradle.toolchains.foojay-resolver-convention") version "1.0.0"
}

val enabledPlugins = listOf(
    "AniChan",
    "AniKotoAnime",
    "AniSuge",
    "AnimeWorldIndia",
    "RareAnimesIndia",
    "Toonix"
)

enabledPlugins.forEach { pluginName ->
    if (File(rootDir, pluginName).exists()) {
        include(pluginName)
    }
}
  
