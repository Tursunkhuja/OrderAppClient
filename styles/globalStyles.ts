import EStyleSheet from 'react-native-extended-stylesheet';

export const variables = {
  $primaryColor: '#354754',
  $primary70Color: 'rgba(53, 71, 84, 0.7)',
  $primary50Color: 'rgba(53, 71, 84, 0.5)',
  $primary30Color: 'rgba(53, 71, 84, 0.3)',
  $primary15Color: 'rgba(53, 71, 84, 0.15)',
  $primary10Color: 'rgba(53, 71, 84, 0.1)',
  $primaryDarkColor: '#000013',
  $secondaryColor: '#f29638',
  $secondaryDarkColor: '#FF6C02',
  $indigoColor: '#3E3354',
  $indigoLighterColor: '#776F8A',
  $white70Color: 'rgba(255, 255, 255, 0.7)',
  $whiteColor: '#ffffff',
  $grayColor: '#ABB6D3',
  $mutedColor: '#f7f8fa',
  $textColor: '#787382',
  $redColor: '#FA2D2D',
  $red50Color: 'rgba(250, 45, 45, 0.5)',
  $blueColor: '#58B1D5',
  $backdropColor: 'rgba(59,78,91,0.7)',
  $greenColor: '#008000',
};

export const initGlobalVariables = () => {
  EStyleSheet.build(variables);
};

const globalStyles: {} = {
  pageContainer: {
    flex: 1,
    backgroundColor: '$mutedColor',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    marginVertical: 20,
    backgroundColor: '$whiteColor',
    padding: 15,
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textCenter: {
    textAlign: 'center',
  },
  AppBarFontStyle: {
    fontFamily: 'Inter-Regular',
    color: '$whiteColor',
  },
  AppBarButtonStyle: {
    fontFamily: 'Inter-Regular',
    color: '$whiteColor',
  },
  heading1: {
    fontSize: 36,
    color: '$primaryColor',
    fontFamily: 'Inter-Medium',
  },
  heading2: {
    fontSize: 20,
    lineHeight: 24,
    color: '$primary70Color',
    fontFamily: 'Inter-Regular',
  },
  text: {
    color: '$textColor',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter-Regular',
  },
  textSmall: {
    color: '$primary50Color',
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Inter-Regular',
  },
  formControl: {
    borderColor: variables.$primary10Color,
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  formControlError: {
    borderColor: variables.$red50Color,
  },
  formControlLabel: {
    color: variables.$primary50Color,
    textTransform: 'uppercase',
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    marginBottom: 2,
  },
  formControlLabelError: {
    color: variables.$redColor,
  },
  formControlText: {
    color: variables.$primaryColor,
    fontFamily: 'Inter-SemiBold',
    fontSize: 13,
    margin: 0,
    padding: 0,
  },
  formControlTextPlaceholder: {
    color: variables.$primary30Color,
  },
  formControlAsterisk: {
    color: variables.$redColor,
    marginLeft: 2,
  },
  whiteFormControl: {
    borderRadius: 4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  formShadow: {
    shadowColor: '#333',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  modalButtonsContainer: {
    padding: 8,
    borderTopWidth: 1,
    borderColor: variables.$primary10Color,
  },
};

export default globalStyles;
