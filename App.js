import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StarWars = () => {
  const [personagemNomes, setPersonagemNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        
        if (!response.ok) {
          throw new Error('Erro ao obter personagens da API SWAPI');
        }

        const data = await response.json();
        const personagens = data.results.slice(0, 10);
        const nomes = personagens.map(personagem => personagem.name);

        setPersonagemNomes(nomes);
      } catch (error) {
        console.error('Erro:', error.message);
      }
    };

    fetchData();
  }, []); 

  return (
    <View style={styles.container}>
      <Text style = {{color: 'yellow'}}>Nomes dos personagens:</Text>
      {personagemNomes.map((name, index) => (
        <Text style = {{color: 'yellow'}} key={index}>{name}</Text>
      ))}
    </View>
  );
};

export default StarWars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
});
