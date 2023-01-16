import {useMemo, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import SingleUser from '../SingleUser';
import {useGetUsers} from '../../hooks/useGetUsers/useGetUsers';
import {NextIcon} from '../../assets/icons/NextIcon';
import {PreviousIcon} from '../../assets/icons/PreviousIcon';

import {useGetAllUsers} from '../../hooks/useGetAllUsers copy/useGetAllUsers';
import {IEdge} from '../../types/user';
import {styles} from './styles';

const initialVariables = {
  first: 10,
  last: null,
  before: null,
  after: null,
};

const ListOfUsers = () => {
  const refInput = useRef<TextInput>(null);
  const [page, setPage] = useState(1);
  const [searchedNames, setSearchedNames] = useState<IEdge[] | null>(null);

  const {data: userList, refetch} = useGetUsers(initialVariables);
  const {data: allUsers, loading} = useGetAllUsers();

  const setFocusOnInput = () => {
    refInput.current?.focus();
  };

  const countOfAllUsers = userList?.allPeople.totalCount;

  const currentItems =
    countOfAllUsers &&
    `${page * 10 - 9}-${
      page * 10 > countOfAllUsers ? countOfAllUsers : page * 10
    }`;

  const onClickNext = () => {
    if (userList && userList.allPeople.totalCount > page * 10) {
      const currentPage = page || 1;
      refetch({
        last: null,
        before: null,
        first: 10,
        after: userList?.allPeople.pageInfo.endCursor,
      });
      setPage(currentPage + 1);
    }
  };
  const onClickPrevious = () => {
    if (page > 1) {
      const currentPage = page || 1;

      refetch({
        first: null,
        after: null,
        last: 10,
        before: userList?.allPeople.pageInfo.startCursor,
      });
      setPage(currentPage - 1);
    }
  };
  const onSearch = (value: string) => {
    if (allUsers?.allPeople.edges) {
      const passedNames = allUsers.allPeople.edges.reduce(
        (prev: IEdge[], cur: IEdge) => {
          if (cur.node.name.toUpperCase().includes(value.toUpperCase())) {
            return [...prev, cur];
          }
          return prev;
        },
        [],
      );
      value ? setSearchedNames(passedNames) : setSearchedNames(null);
    }
  };

  const currentListOfUsers = useMemo(() => {
    return searchedNames ? searchedNames : userList?.allPeople.edges;
  }, [searchedNames, userList?.allPeople.edges]);

  if (loading) {
    return <ActivityIndicator color={'blue'} />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Pressable style={styles.searchContainer} onPress={setFocusOnInput}>
            <SearchIcon />
            <TextInput
              ref={refInput}
              style={styles.input}
              placeholderTextColor={'gray'}
              placeholder={'Search'}
              maxLength={60}
              returnKeyType="done"
              onChangeText={onSearch}
              onSubmitEditing={() => {}}
            />
          </Pressable>
        </View>

        <View style={styles.userListWrapper}>
          <SingleUser isInfo />
          {currentListOfUsers &&
            currentListOfUsers.map((user, index) => (
              <SingleUser
                key={user.node.id}
                user={user.node}
                isLastChild={currentListOfUsers.length === index + 1}
              />
            ))}
          <View
            style={{
              marginRight: 10,
              marginVertical: 10,
              alignSelf: 'flex-end',
              flexDirection: 'row',
            }}>
            <Text style={styles.currentTextWrapper}>
              {searchedNames
                ? `${searchedNames.length} founded`
                : `${currentItems} of ${countOfAllUsers}`}
            </Text>
            {!searchedNames && (
              <View style={styles.iconsWrapper}>
                <PreviousIcon onPress={onClickPrevious} disabled={page === 1} />
                <NextIcon
                  onPress={onClickNext}
                  disabled={
                    userList?.allPeople.totalCount
                      ? userList?.allPeople.totalCount < page * 10
                      : true
                  }
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ListOfUsers;
