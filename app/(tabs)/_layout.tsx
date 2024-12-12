import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarBadgeStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          padding: 0,
        },
        tabBarActiveTintColor: Colors.rose, // Couleur de l'icône active
        tabBarInactiveTintColor: '#999', // Couleur des icônes inactives
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Acceuil',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={Colors.black} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'explore',
          tabBarIcon: ({ color }) => <Ionicons name="navigate-circle-outline" size={24} color={Colors.black} />,
        }}
      />

      <Tabs.Screen
              name="BonPlans"
              options={{
                title: 'Bon Plans',
                tabBarIcon: ({ color }) => <Ionicons name="pricetag-outline" size={24} color={Colors.black} />,
              }}
      />
      <Tabs.Screen
        name="Promotions"
        options={{
          title: 'Promotions',
          tabBarIcon: ({ color }) => <Ionicons name="gift-outline" size={24} color={Colors.black} />,
        }}
      />

<Tabs.Screen
        name="Plus"
        options={{
          title: 'Plus',
          tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={Colors.black} />,
        }}
      />
    </Tabs>
  );
}
