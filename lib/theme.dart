import "package:flutter/material.dart";

class MaterialTheme {
  final TextTheme textTheme;

  const MaterialTheme(this.textTheme);

  static MaterialScheme lightScheme() {
    return const MaterialScheme(
      brightness: Brightness.light,
      primary: Color(4283063442),
      surfaceTint: Color(4278211800),
      onPrimary: Color(4294967295),
      primaryContainer: Color(4280511227),
      onPrimaryContainer: Color(4294967295),
      secondary: Color(4286927872),
      onSecondary: Color(4294967295),
      secondaryContainer: Color(4294947399),
      onSecondaryContainer: Color(4282985472),
      tertiary: Color(4286468704),
      onTertiary: Color(4294967295),
      tertiaryContainer: Color(4291006366),
      onTertiaryContainer: Color(4280419601),
      error: Color(4287704105),
      onError: Color(4294967295),
      errorContainer: Color(4290924362),
      onErrorContainer: Color(4294967295),
      background: Color(4294637823),
      onBackground: Color(4279835428),
      surface: Color(4294768888),
      onSurface: Color(4280032027),
      surfaceVariant: Color(4292862708),
      onSurfaceVariant: Color(4282533461),
      outline: Color(4285757063),
      outlineVariant: Color(4291020504),
      shadow: Color(4278190080),
      scrim: Color(4278190080),
      inverseSurface: Color(4281413680),
      inverseOnSurface: Color(4294242543),
      inversePrimary: Color(4289971711),
      primaryFixed: Color(4292600319),
      onPrimaryFixed: Color(4278196042),
      primaryFixedDim: Color(4289971711),
      onPrimaryFixedVariant: Color(4278206118),
      secondaryFixed: Color(4294958519),
      onSecondaryFixed: Color(4280948480),
      secondaryFixedDim: Color(4294949212),
      onSecondaryFixedVariant: Color(4284825088),
      tertiaryFixed: Color(4294957539),
      onTertiaryFixed: Color(4281405469),
      tertiaryFixedDim: Color(4293900488),
      onTertiaryFixedVariant: Color(4284693320),
      surfaceDim: Color(4292729305),
      surfaceBright: Color(4294768888),
      surfaceContainerLowest: Color(4294967295),
      surfaceContainerLow: Color(4294374386),
      surfaceContainer: Color(4294045164),
      surfaceContainerHigh: Color(4293650407),
      surfaceContainerHighest: Color(4293255905),
    );
  }

  ThemeData light() {
    return theme(lightScheme().toColorScheme());
  }

  static MaterialScheme lightMediumContrastScheme() {
    return const MaterialScheme(
      brightness: Brightness.light,
      primary: Color(4283063442),
      surfaceTint: Color(4278211800),
      onPrimary: Color(4294967295),
      primaryContainer: Color(4280511227),
      onPrimaryContainer: Color(4294967295),
      secondary: Color(4284431104),
      onSecondary: Color(4294967295),
      secondaryContainer: Color(4288899072),
      onSecondaryContainer: Color(4294967295),
      tertiary: Color(4284430148),
      onTertiary: Color(4294967295),
      tertiaryContainer: Color(4288046966),
      onTertiaryContainer: Color(4294967295),
      error: Color(4286520862),
      onError: Color(4294967295),
      errorContainer: Color(4290924362),
      onErrorContainer: Color(4294967295),
      background: Color(4294637823),
      onBackground: Color(4279835428),
      surface: Color(4294768888),
      onSurface: Color(4280032027),
      surfaceVariant: Color(4292862708),
      onSurfaceVariant: Color(4282270289),
      outline: Color(4284178030),
      outlineVariant: Color(4285954698),
      shadow: Color(4278190080),
      scrim: Color(4278190080),
      inverseSurface: Color(4281413680),
      inverseOnSurface: Color(4294242543),
      inversePrimary: Color(4289971711),
      primaryFixed: Color(4280511227),
      onPrimaryFixed: Color(4294967295),
      primaryFixedDim: Color(4278211027),
      onPrimaryFixedVariant: Color(4294967295),
      secondaryFixed: Color(4288899072),
      onSecondaryFixed: Color(4294967295),
      secondaryFixedDim: Color(4286665216),
      onSecondaryFixedVariant: Color(4294967295),
      tertiaryFixed: Color(4288046966),
      onTertiaryFixed: Color(4294967295),
      tertiaryFixedDim: Color(4286271325),
      onTertiaryFixedVariant: Color(4294967295),
      surfaceDim: Color(4292729305),
      surfaceBright: Color(4294768888),
      surfaceContainerLowest: Color(4294967295),
      surfaceContainerLow: Color(4294374386),
      surfaceContainer: Color(4294045164),
      surfaceContainerHigh: Color(4293650407),
      surfaceContainerHighest: Color(4293255905),
    );
  }

  ThemeData lightMediumContrast() {
    return theme(lightMediumContrastScheme().toColorScheme());
  }

  static MaterialScheme lightHighContrastScheme() {
    return const MaterialScheme(
      brightness: Brightness.light,
      primary: Color(4283063442),
      surfaceTint: Color(4278211800),
      onPrimary: Color(4294967295),
      primaryContainer: Color(4278205342),
      onPrimaryContainer: Color(4294967295),
      secondary: Color(4281539840),
      onSecondary: Color(4294967295),
      secondaryContainer: Color(4284431104),
      onSecondaryContainer: Color(4294967295),
      tertiary: Color(4281931556),
      onTertiary: Color(4294967295),
      tertiaryContainer: Color(4284430148),
      onTertiaryContainer: Color(4294967295),
      error: Color(4283236357),
      onError: Color(4294967295),
      errorContainer: Color(4286520862),
      onErrorContainer: Color(4294967295),
      background: Color(4294637823),
      onBackground: Color(4279835428),
      surface: Color(4294768888),
      onSurface: Color(4278190080),
      surfaceVariant: Color(4292862708),
      onSurfaceVariant: Color(4280230705),
      outline: Color(4282270289),
      outlineVariant: Color(4282270289),
      shadow: Color(4278190080),
      scrim: Color(4278190080),
      inverseSurface: Color(4281413680),
      inverseOnSurface: Color(4294967295),
      inversePrimary: Color(4293454847),
      primaryFixed: Color(4278205342),
      onPrimaryFixed: Color(4294967295),
      primaryFixedDim: Color(4278200175),
      onPrimaryFixedVariant: Color(4294967295),
      secondaryFixed: Color(4284431104),
      onSecondaryFixed: Color(4294967295),
      secondaryFixedDim: Color(4282459904),
      onSecondaryFixedVariant: Color(4294967295),
      tertiaryFixed: Color(4284430148),
      onTertiaryFixed: Color(4294967295),
      tertiaryFixedDim: Color(4282720558),
      onTertiaryFixedVariant: Color(4294967295),
      surfaceDim: Color(4292729305),
      surfaceBright: Color(4294768888),
      surfaceContainerLowest: Color(4294967295),
      surfaceContainerLow: Color(4294374386),
      surfaceContainer: Color(4294045164),
      surfaceContainerHigh: Color(4293650407),
      surfaceContainerHighest: Color(4293255905),
    );
  }

  ThemeData lightHighContrast() {
    return theme(lightHighContrastScheme().toColorScheme());
  }

  static MaterialScheme darkScheme() {
    return const MaterialScheme(
      brightness: Brightness.dark,
      primary: Color(4289971711),
      surfaceTint: Color(4289971711),
      onPrimary: Color(4278200950),
      primaryContainer: Color(4279788790),
      onPrimaryContainer: Color(4294967295),
      secondary: Color(4294956453),
      onSecondary: Color(4282788352),
      secondaryContainer: Color(4294418432),
      onSecondaryContainer: Color(4281999872),
      tertiary: Color(4293900488),
      onTertiary: Color(4283049266),
      tertiaryContainer: Color(4288046966),
      onTertiaryContainer: Color(4294967295),
      error: Color(4294947757),
      onError: Color(4284811534),
      errorContainer: Color(4290924362),
      onErrorContainer: Color(4294967295),
      background: Color(4279309083),
      onBackground: Color(4292993774),
      surface: Color(4279505683),
      onSurface: Color(4293255905),
      surfaceVariant: Color(4282533461),
      onSurfaceVariant: Color(4291020504),
      outline: Color(4287402145),
      outlineVariant: Color(4282533461),
      shadow: Color(4278190080),
      scrim: Color(4278190080),
      inverseSurface: Color(4293255905),
      inverseOnSurface: Color(4281413680),
      inversePrimary: Color(4278211800),
      primaryFixed: Color(4292600319),
      onPrimaryFixed: Color(4278196042),
      primaryFixedDim: Color(4289971711),
      onPrimaryFixedVariant: Color(4278206118),
      secondaryFixed: Color(4294958519),
      onSecondaryFixed: Color(4280948480),
      secondaryFixedDim: Color(4294949212),
      onSecondaryFixedVariant: Color(4284825088),
      tertiaryFixed: Color(4294957539),
      onTertiaryFixed: Color(4281405469),
      tertiaryFixedDim: Color(4293900488),
      onTertiaryFixedVariant: Color(4284693320),
      surfaceDim: Color(4279505683),
      surfaceBright: Color(4282005817),
      surfaceContainerLowest: Color(4279111182),
      surfaceContainerLow: Color(4280032027),
      surfaceContainer: Color(4280295199),
      surfaceContainerHigh: Color(4280953386),
      surfaceContainerHighest: Color(4281676852),
    );
  }

  ThemeData dark() {
    return theme(darkScheme().toColorScheme());
  }

  static MaterialScheme darkMediumContrastScheme() {
    return const MaterialScheme(
      brightness: Brightness.dark,
      primary: Color(4289971711),
      surfaceTint: Color(4289971711),
      onPrimary: Color(4278195007),
      primaryContainer: Color(4284517375),
      onPrimaryContainer: Color(4278190080),
      secondary: Color(4294956453),
      onSecondary: Color(4281868288),
      secondaryContainer: Color(4294418432),
      onSecondaryContainer: Color(4278190080),
      tertiary: Color(4294229196),
      onTertiary: Color(4281010968),
      tertiaryContainer: Color(4290085778),
      onTertiaryContainer: Color(4278190080),
      error: Color(4294949299),
      onError: Color(4281794563),
      errorContainer: Color(4293290595),
      onErrorContainer: Color(4278190080),
      background: Color(4279309083),
      onBackground: Color(4292993774),
      surface: Color(4279505683),
      onSurface: Color(4294900473),
      surfaceVariant: Color(4282533461),
      onSurfaceVariant: Color(4291283676),
      outline: Color(4288651955),
      outlineVariant: Color(4286546579),
      shadow: Color(4278190080),
      scrim: Color(4278190080),
      inverseSurface: Color(4293255905),
      inverseOnSurface: Color(4280953386),
      inversePrimary: Color(4278206377),
      primaryFixed: Color(4292600319),
      onPrimaryFixed: Color(4278193716),
      primaryFixedDim: Color(4289971711),
      onPrimaryFixedVariant: Color(4278202243),
      secondaryFixed: Color(4294958519),
      onSecondaryFixed: Color(4280028672),
      secondaryFixedDim: Color(4294949212),
      onSecondaryFixedVariant: Color(4283313920),
      tertiaryFixed: Color(4294957539),
      onTertiaryFixed: Color(4280550930),
      tertiaryFixedDim: Color(4293900488),
      onTertiaryFixedVariant: Color(4283444024),
      surfaceDim: Color(4279505683),
      surfaceBright: Color(4282005817),
      surfaceContainerLowest: Color(4279111182),
      surfaceContainerLow: Color(4280032027),
      surfaceContainer: Color(4280295199),
      surfaceContainerHigh: Color(4280953386),
      surfaceContainerHighest: Color(4281676852),
    );
  }

  ThemeData darkMediumContrast() {
    return theme(darkMediumContrastScheme().toColorScheme());
  }

  static MaterialScheme darkHighContrastScheme() {
    return const MaterialScheme(
      brightness: Brightness.dark,
      primary: Color(4289840639),
      surfaceTint: Color(4289971711),
      onPrimary: Color(4278190080),
      primaryContainer: Color(4290365951),
      onPrimaryContainer: Color(4278190080),
      secondary: Color(4294966007),
      onSecondary: Color(4278190080),
      secondaryContainer: Color(4294950764),
      onSecondaryContainer: Color(4278190080),
      tertiary: Color(4294965753),
      onTertiary: Color(4278190080),
      tertiaryContainer: Color(4294229196),
      onTertiaryContainer: Color(4278190080),
      error: Color(4294965753),
      onError: Color(4278190080),
      errorContainer: Color(4294949299),
      onErrorContainer: Color(4278190080),
      background: Color(4279309083),
      onBackground: Color(4292993774),
      surface: Color(4279505683),
      onSurface: Color(4294967295),
      surfaceVariant: Color(4282533461),
      onSurfaceVariant: Color(4294769407),
      outline: Color(4291283676),
      outlineVariant: Color(4291283676),
      shadow: Color(4278190080),
      scrim: Color(4278190080),
      inverseSurface: Color(4293255905),
      inverseOnSurface: Color(4278190080),
      inversePrimary: Color(4278199401),
      primaryFixed: Color(4292994815),
      onPrimaryFixed: Color(4278190080),
      primaryFixedDim: Color(4290365951),
      onPrimaryFixedVariant: Color(4278195007),
      secondaryFixed: Color(4294959811),
      onSecondaryFixed: Color(4278190080),
      secondaryFixedDim: Color(4294950764),
      onSecondaryFixedVariant: Color(4280488704),
      tertiaryFixed: Color(4294959079),
      onTertiaryFixed: Color(4278190080),
      tertiaryFixedDim: Color(4294229196),
      onTertiaryFixedVariant: Color(4281010968),
      surfaceDim: Color(4279505683),
      surfaceBright: Color(4282005817),
      surfaceContainerLowest: Color(4279111182),
      surfaceContainerLow: Color(4280032027),
      surfaceContainer: Color(4280295199),
      surfaceContainerHigh: Color(4280953386),
      surfaceContainerHighest: Color(4281676852),
    );
  }

  ThemeData darkHighContrast() {
    return theme(darkHighContrastScheme().toColorScheme());
  }


  ThemeData theme(ColorScheme colorScheme) => ThemeData(
     useMaterial3: true,
     brightness: colorScheme.brightness,
     colorScheme: colorScheme,
     textTheme: textTheme.apply(
       bodyColor: colorScheme.onSurface,
       displayColor: colorScheme.onSurface,
     ),
     scaffoldBackgroundColor: colorScheme.background,
     canvasColor: colorScheme.surface,
  );

  /// neumorphicShadowDark
  static const neumorphicShadowDark = ExtendedColor(
    seed: Color(4283252085),
    value: Color(4283252085),
    light: ColorFamily(
      color: Color(4281936480),
      onColor: Color(4294967295),
      colorContainer: Color(4284304517),
      onColorContainer: Color(4294899967),
    ),
    lightMediumContrast: ColorFamily(
      color: Color(4281936480),
      onColor: Color(4294967295),
      colorContainer: Color(4284304517),
      onColorContainer: Color(4294899967),
    ),
    lightHighContrast: ColorFamily(
      color: Color(4281936480),
      onColor: Color(4294967295),
      colorContainer: Color(4284304517),
      onColorContainer: Color(4294899967),
    ),
    dark: ColorFamily(
      color: Color(4291869950),
      onColor: Color(4281738845),
      colorContainer: Color(4282659947),
      onColorContainer: Color(4292528639),
    ),
    darkMediumContrast: ColorFamily(
      color: Color(4291869950),
      onColor: Color(4281738845),
      colorContainer: Color(4282659947),
      onColorContainer: Color(4292528639),
    ),
    darkHighContrast: ColorFamily(
      color: Color(4291869950),
      onColor: Color(4281738845),
      colorContainer: Color(4282659947),
      onColorContainer: Color(4292528639),
    ),
  );

  /// neumorphicHighlightDark
  static const neumorphicHighlightDark = ExtendedColor(
    seed: Color(4292469759),
    value: Color(4292469759),
    light: ColorFamily(
      color: Color(4283719286),
      onColor: Color(4294967295),
      colorContainer: Color(4292863999),
      onColorContainer: Color(4282469217),
    ),
    lightMediumContrast: ColorFamily(
      color: Color(4283719286),
      onColor: Color(4294967295),
      colorContainer: Color(4292863999),
      onColorContainer: Color(4282469217),
    ),
    lightHighContrast: ColorFamily(
      color: Color(4283719286),
      onColor: Color(4294967295),
      colorContainer: Color(4292863999),
      onColorContainer: Color(4282469217),
    ),
    dark: ColorFamily(
      color: Color(4294967295),
      onColor: Color(4280692805),
      colorContainer: Color(4291482864),
      onColorContainer: Color(4281679701),
    ),
    darkMediumContrast: ColorFamily(
      color: Color(4294967295),
      onColor: Color(4280692805),
      colorContainer: Color(4291482864),
      onColorContainer: Color(4281679701),
    ),
    darkHighContrast: ColorFamily(
      color: Color(4294967295),
      onColor: Color(4280692805),
      colorContainer: Color(4291482864),
      onColorContainer: Color(4281679701),
    ),
  );

  /// neumorphicShadowLight
  static const neumorphicShadowLight = ExtendedColor(
    seed: Color(4292469759),
    value: Color(4292469759),
    light: ColorFamily(
      color: Color(4283719286),
      onColor: Color(4294967295),
      colorContainer: Color(4292863999),
      onColorContainer: Color(4282469217),
    ),
    lightMediumContrast: ColorFamily(
      color: Color(4283719286),
      onColor: Color(4294967295),
      colorContainer: Color(4292863999),
      onColorContainer: Color(4282469217),
    ),
    lightHighContrast: ColorFamily(
      color: Color(4283719286),
      onColor: Color(4294967295),
      colorContainer: Color(4292863999),
      onColorContainer: Color(4282469217),
    ),
    dark: ColorFamily(
      color: Color(4294967295),
      onColor: Color(4280692805),
      colorContainer: Color(4291482864),
      onColorContainer: Color(4281679701),
    ),
    darkMediumContrast: ColorFamily(
      color: Color(4294967295),
      onColor: Color(4280692805),
      colorContainer: Color(4291482864),
      onColorContainer: Color(4281679701),
    ),
    darkHighContrast: ColorFamily(
      color: Color(4294967295),
      onColor: Color(4280692805),
      colorContainer: Color(4291482864),
      onColorContainer: Color(4281679701),
    ),
  );

  /// neumorphicHighlightLight
  static const neumorphicHighlightLight = ExtendedColor(
    seed: Color(4294967295),
    value: Color(4294967295),
    light: ColorFamily(
      color: Color(4284309343),
      onColor: Color(4294967295),
      colorContainer: Color(4294967295),
      onColorContainer: Color(4283914329),
    ),
    lightMediumContrast: ColorFamily(
      color: Color(4284309343),
      onColor: Color(4294967295),
      colorContainer: Color(4294967295),
      onColorContainer: Color(4283914329),
    ),
    lightHighContrast: ColorFamily(
      color: Color(4284309343),
      onColor: Color(4294967295),
      colorContainer: Color(4294967295),
      onColorContainer: Color(4283914329),
    ),
    dark: ColorFamily(
      color: Color(4294967295),
      onColor: Color(4281282865),
      colorContainer: Color(4292138196),
      onColorContainer: Color(4282269760),
    ),
    darkMediumContrast: ColorFamily(
      color: Color(4294967295),
      onColor: Color(4281282865),
      colorContainer: Color(4292138196),
      onColorContainer: Color(4282269760),
    ),
    darkHighContrast: ColorFamily(
      color: Color(4294967295),
      onColor: Color(4281282865),
      colorContainer: Color(4292138196),
      onColorContainer: Color(4282269760),
    ),
  );


  List<ExtendedColor> get extendedColors => [
    neumorphicShadowDark,
    neumorphicHighlightDark,
    neumorphicShadowLight,
    neumorphicHighlightLight,
  ];
}

class MaterialScheme {
  const MaterialScheme({
    required this.brightness,
    required this.primary, 
    required this.surfaceTint, 
    required this.onPrimary, 
    required this.primaryContainer, 
    required this.onPrimaryContainer, 
    required this.secondary, 
    required this.onSecondary, 
    required this.secondaryContainer, 
    required this.onSecondaryContainer, 
    required this.tertiary, 
    required this.onTertiary, 
    required this.tertiaryContainer, 
    required this.onTertiaryContainer, 
    required this.error, 
    required this.onError, 
    required this.errorContainer, 
    required this.onErrorContainer, 
    required this.background, 
    required this.onBackground, 
    required this.surface, 
    required this.onSurface, 
    required this.surfaceVariant, 
    required this.onSurfaceVariant, 
    required this.outline, 
    required this.outlineVariant, 
    required this.shadow, 
    required this.scrim, 
    required this.inverseSurface, 
    required this.inverseOnSurface, 
    required this.inversePrimary, 
    required this.primaryFixed, 
    required this.onPrimaryFixed, 
    required this.primaryFixedDim, 
    required this.onPrimaryFixedVariant, 
    required this.secondaryFixed, 
    required this.onSecondaryFixed, 
    required this.secondaryFixedDim, 
    required this.onSecondaryFixedVariant, 
    required this.tertiaryFixed, 
    required this.onTertiaryFixed, 
    required this.tertiaryFixedDim, 
    required this.onTertiaryFixedVariant, 
    required this.surfaceDim, 
    required this.surfaceBright, 
    required this.surfaceContainerLowest, 
    required this.surfaceContainerLow, 
    required this.surfaceContainer, 
    required this.surfaceContainerHigh, 
    required this.surfaceContainerHighest, 
  });

  final Brightness brightness;
  final Color primary;
  final Color surfaceTint;
  final Color onPrimary;
  final Color primaryContainer;
  final Color onPrimaryContainer;
  final Color secondary;
  final Color onSecondary;
  final Color secondaryContainer;
  final Color onSecondaryContainer;
  final Color tertiary;
  final Color onTertiary;
  final Color tertiaryContainer;
  final Color onTertiaryContainer;
  final Color error;
  final Color onError;
  final Color errorContainer;
  final Color onErrorContainer;
  final Color background;
  final Color onBackground;
  final Color surface;
  final Color onSurface;
  final Color surfaceVariant;
  final Color onSurfaceVariant;
  final Color outline;
  final Color outlineVariant;
  final Color shadow;
  final Color scrim;
  final Color inverseSurface;
  final Color inverseOnSurface;
  final Color inversePrimary;
  final Color primaryFixed;
  final Color onPrimaryFixed;
  final Color primaryFixedDim;
  final Color onPrimaryFixedVariant;
  final Color secondaryFixed;
  final Color onSecondaryFixed;
  final Color secondaryFixedDim;
  final Color onSecondaryFixedVariant;
  final Color tertiaryFixed;
  final Color onTertiaryFixed;
  final Color tertiaryFixedDim;
  final Color onTertiaryFixedVariant;
  final Color surfaceDim;
  final Color surfaceBright;
  final Color surfaceContainerLowest;
  final Color surfaceContainerLow;
  final Color surfaceContainer;
  final Color surfaceContainerHigh;
  final Color surfaceContainerHighest;
}

extension MaterialSchemeUtils on MaterialScheme {
  ColorScheme toColorScheme() {
    return ColorScheme(
      brightness: brightness,
      primary: primary,
      onPrimary: onPrimary,
      primaryContainer: primaryContainer,
      onPrimaryContainer: onPrimaryContainer,
      secondary: secondary,
      onSecondary: onSecondary,
      secondaryContainer: secondaryContainer,
      onSecondaryContainer: onSecondaryContainer,
      tertiary: tertiary,
      onTertiary: onTertiary,
      tertiaryContainer: tertiaryContainer,
      onTertiaryContainer: onTertiaryContainer,
      error: error,
      onError: onError,
      errorContainer: errorContainer,
      onErrorContainer: onErrorContainer,
      background: background,
      onBackground: onBackground,
      surface: surface,
      onSurface: onSurface,
      surfaceVariant: surfaceVariant,
      onSurfaceVariant: onSurfaceVariant,
      outline: outline,
      outlineVariant: outlineVariant,
      shadow: shadow,
      scrim: scrim,
      inverseSurface: inverseSurface,
      onInverseSurface: inverseOnSurface,
      inversePrimary: inversePrimary,
    );
  }
}

class ExtendedColor {
  final Color seed, value;
  final ColorFamily light;
  final ColorFamily lightHighContrast;
  final ColorFamily lightMediumContrast;
  final ColorFamily dark;
  final ColorFamily darkHighContrast;
  final ColorFamily darkMediumContrast;

  const ExtendedColor({
    required this.seed,
    required this.value,
    required this.light,
    required this.lightHighContrast,
    required this.lightMediumContrast,
    required this.dark,
    required this.darkHighContrast,
    required this.darkMediumContrast,
  });
}

class ColorFamily {
  const ColorFamily({
    required this.color,
    required this.onColor,
    required this.colorContainer,
    required this.onColorContainer,
  });

  final Color color;
  final Color onColor;
  final Color colorContainer;
  final Color onColorContainer;
}
