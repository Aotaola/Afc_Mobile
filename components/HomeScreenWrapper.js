
import Home from './Home.js';

function HomeScreenWrapper({ navigation }) {
    return (
      <View style={styles.homeContainer}>
        <Home />
        <View style={styles.divider} />
        <View style={styles.navigationButtons}>
          <Button title="Go to Schedule" onPress={() => navigation.navigate('Schedule')} />
          <Button title="Go to Location" onPress={() => navigation.navigate('Location')} />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
export default HomeScreenWrapper;