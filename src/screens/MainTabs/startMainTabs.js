import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';
import { Fonts } from "../../../src/utils/Fonts";

const startTabs = () => {

    Promise.all([
        Icon.getImageSource("map", 24),
        Icon.getImageSource("share-alt", 24),
        Icon.getImageSource("bars", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    title: "Find Place",
                    label: "Find Place",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    title: "Share Place",
                    label: "Share Place",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            tabsStyle: {
                tabBarButtonColor: "#444444",
                tabBarSelectedButtonColor: "#666666",
                tabBarBackgroundColor: '#f8f8f8',
                tabBarTextFontFamily: Fonts.MontserratSemiBold

            },
            appStyle: {
                tabBarButtonColor: "#444444",
                tabBarSelectedButtonColor: "#666666",
                tabBarBackgroundColor: "#f8f8f8",
                tabFontFamily: Fonts.MontserratSemiBold

            },
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawer"
                    
                }
            }
        });

    });
    

    

}

export default startTabs;

