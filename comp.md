<FlatList
data={value.dataSource}
keyExtractor={item => item.id.toString()}
renderItem={({item}) => (
<TouchableWithoutFeedback>
<NewsCard
onPress={() => Alert.alert('Hey')}
title={item.title.rendered}
date={this.getDateString(item.date)}
img={
item.\_embedded['wp:featuredmedia']['0'].source_url
}
/>
</TouchableWithoutFeedback>
)}
/>


 onPress={() =>
                          this.props.navigation.navigate('Details', {
                            name: item.title.rendered.replace(/<\/?[^>]+(>|$)/g, '',),
                            content: item.content.rendered,
                            img: item._embedded['wp:featuredmedia']['0'].source_url,

                            date: this.getDateString(item.date),
                          })
                        }


 this.props.navigation.navigate('Root', {
                      screen: 'Browser',
                      params: {
                        url: url.match(/\.pdf$/)
                          ? 'http://docs.google.com/gview?embedded=true&url=' +
                            url
                          : url,
                      },
                    })
                  : this.props.navigation.navigate('Root', {
                      screen: 'Browser',
                      params: {
                        url: url,
                      },
                    })