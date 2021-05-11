from faker import Faker

fake = Faker()

def create_cards(num_cards):
    """Generate fake word + color combination cards"""

    cards = []
    for i in range(num_cards):
        color = fake.safe_color_name()
        while color == 'white':
            color = fake.safe_color_name()
        word = fake.unique.word()
        cards.extend([{'id': str(i) + 'a',
                    'word': word,
                    'color': color},
                    {'id': str(i) + 'b',
                    'word': word,
                    'color': color}])
    
    return cards