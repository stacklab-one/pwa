export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: "Categories";
  /** An array relationship */
  categoryTags: Array<CategoryTags>;
  /** An array relationship */
  categoryTools: Array<CategoryTools>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  description: Scalars["String"]["output"];
  id: Scalars["uuid"]["output"];
  name: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};


/** columns and relationships of "categories" */
export type CategoriesCategoryTagsArgs = {
  distinctOn?: InputMaybe<Array<CategoryTagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryTagsOrderBy>>;
  where?: InputMaybe<CategoryTagsBoolExp>;
};


/** columns and relationships of "categories" */
export type CategoriesCategoryToolsArgs = {
  distinctOn?: InputMaybe<Array<CategoryToolsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryToolsOrderBy>>;
  where?: InputMaybe<CategoryToolsBoolExp>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type CategoriesBoolExp = {
  _and?: InputMaybe<Array<CategoriesBoolExp>>;
  _not?: InputMaybe<CategoriesBoolExp>;
  _or?: InputMaybe<Array<CategoriesBoolExp>>;
  categoryTags?: InputMaybe<CategoryTagsBoolExp>;
  categoryTools?: InputMaybe<CategoryToolsBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "categories". */
export type CategoriesOrderBy = {
  categoryTagsAggregate?: InputMaybe<CategoryTagsAggregateOrderBy>;
  categoryToolsAggregate?: InputMaybe<CategoryToolsAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "categories" */
export enum CategoriesSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** Streaming cursor of the table "categories" */
export type CategoriesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CategoriesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CategoriesStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** columns and relationships of "category_tags" */
export type CategoryTags = {
  __typename?: "CategoryTags";
  /** An object relationship */
  category: Categories;
  categoryId: Scalars["uuid"]["output"];
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  creationType: Scalars["Int"]["output"];
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  tag: Tags;
  tagId: Scalars["uuid"]["output"];
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by aggregate values of table "category_tags" */
export type CategoryTagsAggregateOrderBy = {
  avg?: InputMaybe<CategoryTagsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CategoryTagsMaxOrderBy>;
  min?: InputMaybe<CategoryTagsMinOrderBy>;
  stddev?: InputMaybe<CategoryTagsStddevOrderBy>;
  stddevPop?: InputMaybe<CategoryTagsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<CategoryTagsStddevSampOrderBy>;
  sum?: InputMaybe<CategoryTagsSumOrderBy>;
  varPop?: InputMaybe<CategoryTagsVarPopOrderBy>;
  varSamp?: InputMaybe<CategoryTagsVarSampOrderBy>;
  variance?: InputMaybe<CategoryTagsVarianceOrderBy>;
};

/** order by avg() on columns of table "category_tags" */
export type CategoryTagsAvgOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "category_tags". All fields are combined with a logical 'AND'. */
export type CategoryTagsBoolExp = {
  _and?: InputMaybe<Array<CategoryTagsBoolExp>>;
  _not?: InputMaybe<CategoryTagsBoolExp>;
  _or?: InputMaybe<Array<CategoryTagsBoolExp>>;
  category?: InputMaybe<CategoriesBoolExp>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  creationType?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  tag?: InputMaybe<TagsBoolExp>;
  tagId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** order by max() on columns of table "category_tags" */
export type CategoryTagsMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  creationType?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tagId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "category_tags" */
export type CategoryTagsMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  creationType?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tagId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "category_tags". */
export type CategoryTagsOrderBy = {
  category?: InputMaybe<CategoriesOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  creationType?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tag?: InputMaybe<TagsOrderBy>;
  tagId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "category_tags" */
export enum CategoryTagsSelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  CreationType = "creationType",
  /** column name */
  Id = "id",
  /** column name */
  TagId = "tagId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** order by stddev() on columns of table "category_tags" */
export type CategoryTagsStddevOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "category_tags" */
export type CategoryTagsStddevPopOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "category_tags" */
export type CategoryTagsStddevSampOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "category_tags" */
export type CategoryTagsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CategoryTagsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CategoryTagsStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["uuid"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  creationType?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  tagId?: InputMaybe<Scalars["uuid"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** order by sum() on columns of table "category_tags" */
export type CategoryTagsSumOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** order by varPop() on columns of table "category_tags" */
export type CategoryTagsVarPopOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "category_tags" */
export type CategoryTagsVarSampOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "category_tags" */
export type CategoryTagsVarianceOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** columns and relationships of "category_tools" */
export type CategoryTools = {
  __typename?: "CategoryTools";
  /** An object relationship */
  category?: Maybe<Categories>;
  categoryId?: Maybe<Scalars["uuid"]["output"]>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  tool?: Maybe<Tools>;
  toolId?: Maybe<Scalars["uuid"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by aggregate values of table "category_tools" */
export type CategoryToolsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CategoryToolsMaxOrderBy>;
  min?: InputMaybe<CategoryToolsMinOrderBy>;
};

/** Boolean expression to filter rows from the table "category_tools". All fields are combined with a logical 'AND'. */
export type CategoryToolsBoolExp = {
  _and?: InputMaybe<Array<CategoryToolsBoolExp>>;
  _not?: InputMaybe<CategoryToolsBoolExp>;
  _or?: InputMaybe<Array<CategoryToolsBoolExp>>;
  category?: InputMaybe<CategoriesBoolExp>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  tool?: InputMaybe<ToolsBoolExp>;
  toolId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** order by max() on columns of table "category_tools" */
export type CategoryToolsMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  toolId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "category_tools" */
export type CategoryToolsMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  toolId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "category_tools". */
export type CategoryToolsOrderBy = {
  category?: InputMaybe<CategoriesOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tool?: InputMaybe<ToolsOrderBy>;
  toolId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "category_tools" */
export enum CategoryToolsSelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  ToolId = "toolId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** Streaming cursor of the table "category_tools" */
export type CategoryToolsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CategoryToolsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CategoryToolsStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["uuid"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  toolId?: InputMaybe<Scalars["uuid"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC"
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _containedIn?: InputMaybe<Scalars["jsonb"]["input"]>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars["jsonb"]["input"]>;
  _eq?: InputMaybe<Scalars["jsonb"]["input"]>;
  _gt?: InputMaybe<Scalars["jsonb"]["input"]>;
  _gte?: InputMaybe<Scalars["jsonb"]["input"]>;
  /** does the string exist as a top-level key in the column */
  _hasKey?: InputMaybe<Scalars["String"]["input"]>;
  /** do all of these strings exist as top-level keys in the column */
  _hasKeysAll?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _hasKeysAny?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _in?: InputMaybe<Array<Scalars["jsonb"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["jsonb"]["input"]>;
  _lte?: InputMaybe<Scalars["jsonb"]["input"]>;
  _neq?: InputMaybe<Scalars["jsonb"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["jsonb"]["input"]>>;
};

/** columns and relationships of "medias" */
export type Medias = {
  __typename?: "Medias";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  fileName: Scalars["String"]["output"];
  fileNameDisk: Scalars["String"]["output"];
  filePath: Scalars["String"]["output"];
  fileSize: Scalars["Int"]["output"];
  fileType: Scalars["String"]["output"];
  height?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["uuid"]["output"];
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  /** An array relationship */
  users: Array<Users>;
  width?: Maybe<Scalars["Int"]["output"]>;
};


/** columns and relationships of "medias" */
export type MediasUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Boolean expression to filter rows from the table "medias". All fields are combined with a logical 'AND'. */
export type MediasBoolExp = {
  _and?: InputMaybe<Array<MediasBoolExp>>;
  _not?: InputMaybe<MediasBoolExp>;
  _or?: InputMaybe<Array<MediasBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  fileName?: InputMaybe<StringComparisonExp>;
  fileNameDisk?: InputMaybe<StringComparisonExp>;
  filePath?: InputMaybe<StringComparisonExp>;
  fileSize?: InputMaybe<IntComparisonExp>;
  fileType?: InputMaybe<StringComparisonExp>;
  height?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  users?: InputMaybe<UsersBoolExp>;
  width?: InputMaybe<IntComparisonExp>;
};

/** Ordering options when selecting data from "medias". */
export type MediasOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  fileName?: InputMaybe<OrderBy>;
  fileNameDisk?: InputMaybe<OrderBy>;
  filePath?: InputMaybe<OrderBy>;
  fileSize?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  usersAggregate?: InputMaybe<UsersAggregateOrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** select columns of table "medias" */
export enum MediasSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  FileName = "fileName",
  /** column name */
  FileNameDisk = "fileNameDisk",
  /** column name */
  FilePath = "filePath",
  /** column name */
  FileSize = "fileSize",
  /** column name */
  FileType = "fileType",
  /** column name */
  Height = "height",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  Width = "width"
}

/** Streaming cursor of the table "medias" */
export type MediasStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: MediasStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MediasStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  fileNameDisk?: InputMaybe<Scalars["String"]["input"]>;
  filePath?: InputMaybe<Scalars["String"]["input"]>;
  fileSize?: InputMaybe<Scalars["Int"]["input"]>;
  fileType?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = "ASC",
  /** in ascending order, nulls first */
  AscNullsFirst = "ASC_NULLS_FIRST",
  /** in ascending order, nulls last */
  AscNullsLast = "ASC_NULLS_LAST",
  /** in descending order, nulls first */
  Desc = "DESC",
  /** in descending order, nulls first */
  DescNullsFirst = "DESC_NULLS_FIRST",
  /** in descending order, nulls last */
  DescNullsLast = "DESC_NULLS_LAST"
}

/** columns and relationships of "stack_tools" */
export type StackTools = {
  __typename?: "StackTools";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  stack?: Maybe<Stacks>;
  stackId?: Maybe<Scalars["uuid"]["output"]>;
  /** An object relationship */
  tool?: Maybe<Tools>;
  toolId?: Maybe<Scalars["uuid"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by aggregate values of table "stack_tools" */
export type StackToolsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<StackToolsMaxOrderBy>;
  min?: InputMaybe<StackToolsMinOrderBy>;
};

/** Boolean expression to filter rows from the table "stack_tools". All fields are combined with a logical 'AND'. */
export type StackToolsBoolExp = {
  _and?: InputMaybe<Array<StackToolsBoolExp>>;
  _not?: InputMaybe<StackToolsBoolExp>;
  _or?: InputMaybe<Array<StackToolsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  stack?: InputMaybe<StacksBoolExp>;
  stackId?: InputMaybe<UuidComparisonExp>;
  tool?: InputMaybe<ToolsBoolExp>;
  toolId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** order by max() on columns of table "stack_tools" */
export type StackToolsMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stackId?: InputMaybe<OrderBy>;
  toolId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "stack_tools" */
export type StackToolsMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stackId?: InputMaybe<OrderBy>;
  toolId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "stack_tools". */
export type StackToolsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stack?: InputMaybe<StacksOrderBy>;
  stackId?: InputMaybe<OrderBy>;
  tool?: InputMaybe<ToolsOrderBy>;
  toolId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "stack_tools" */
export enum StackToolsSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  StackId = "stackId",
  /** column name */
  ToolId = "toolId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** Streaming cursor of the table "stack_tools" */
export type StackToolsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: StackToolsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type StackToolsStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  stackId?: InputMaybe<Scalars["uuid"]["input"]>;
  toolId?: InputMaybe<Scalars["uuid"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** columns and relationships of "stacks" */
export type Stacks = {
  __typename?: "Stacks";
  authorId?: Maybe<Scalars["uuid"]["output"]>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  description: Scalars["String"]["output"];
  id: Scalars["uuid"]["output"];
  name: Scalars["String"]["output"];
  repositoryUrl?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  stackTools: Array<StackTools>;
  tags: Scalars["jsonb"]["output"];
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  /** An object relationship */
  user?: Maybe<Users>;
  websiteUrl?: Maybe<Scalars["String"]["output"]>;
};


/** columns and relationships of "stacks" */
export type StacksStackToolsArgs = {
  distinctOn?: InputMaybe<Array<StackToolsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<StackToolsOrderBy>>;
  where?: InputMaybe<StackToolsBoolExp>;
};


/** columns and relationships of "stacks" */
export type StacksTagsArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** order by aggregate values of table "stacks" */
export type StacksAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<StacksMaxOrderBy>;
  min?: InputMaybe<StacksMinOrderBy>;
};

/** Boolean expression to filter rows from the table "stacks". All fields are combined with a logical 'AND'. */
export type StacksBoolExp = {
  _and?: InputMaybe<Array<StacksBoolExp>>;
  _not?: InputMaybe<StacksBoolExp>;
  _or?: InputMaybe<Array<StacksBoolExp>>;
  authorId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  repositoryUrl?: InputMaybe<StringComparisonExp>;
  stackTools?: InputMaybe<StackToolsBoolExp>;
  tags?: InputMaybe<JsonbComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  websiteUrl?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "stacks" */
export type StacksMaxOrderBy = {
  authorId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  repositoryUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  websiteUrl?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "stacks" */
export type StacksMinOrderBy = {
  authorId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  repositoryUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  websiteUrl?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "stacks". */
export type StacksOrderBy = {
  authorId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  repositoryUrl?: InputMaybe<OrderBy>;
  stackToolsAggregate?: InputMaybe<StackToolsAggregateOrderBy>;
  tags?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  websiteUrl?: InputMaybe<OrderBy>;
};

/** select columns of table "stacks" */
export enum StacksSelectColumn {
  /** column name */
  AuthorId = "authorId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  RepositoryUrl = "repositoryUrl",
  /** column name */
  Tags = "tags",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  WebsiteUrl = "websiteUrl"
}

/** Streaming cursor of the table "stacks" */
export type StacksStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: StacksStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type StacksStreamCursorValueInput = {
  authorId?: InputMaybe<Scalars["uuid"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  repositoryUrl?: InputMaybe<Scalars["String"]["input"]>;
  tags?: InputMaybe<Scalars["jsonb"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  websiteUrl?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "tags" */
export type Tags = {
  __typename?: "Tags";
  /** An array relationship */
  categoryTags: Array<CategoryTags>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id: Scalars["uuid"]["output"];
  tag: Scalars["String"]["output"];
  /** An array relationship */
  toolTags: Array<ToolTags>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};


/** columns and relationships of "tags" */
export type TagsCategoryTagsArgs = {
  distinctOn?: InputMaybe<Array<CategoryTagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryTagsOrderBy>>;
  where?: InputMaybe<CategoryTagsBoolExp>;
};


/** columns and relationships of "tags" */
export type TagsToolTagsArgs = {
  distinctOn?: InputMaybe<Array<ToolTagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ToolTagsOrderBy>>;
  where?: InputMaybe<ToolTagsBoolExp>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type TagsBoolExp = {
  _and?: InputMaybe<Array<TagsBoolExp>>;
  _not?: InputMaybe<TagsBoolExp>;
  _or?: InputMaybe<Array<TagsBoolExp>>;
  categoryTags?: InputMaybe<CategoryTagsBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  tag?: InputMaybe<StringComparisonExp>;
  toolTags?: InputMaybe<ToolTagsBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "tags". */
export type TagsOrderBy = {
  categoryTagsAggregate?: InputMaybe<CategoryTagsAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tag?: InputMaybe<OrderBy>;
  toolTagsAggregate?: InputMaybe<ToolTagsAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "tags" */
export enum TagsSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  Tag = "tag",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** Streaming cursor of the table "tags" */
export type TagsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TagsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TagsStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

/** columns and relationships of "tool_data" */
export type ToolData = {
  __typename?: "ToolData";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  downloads?: Maybe<Scalars["Int"]["output"]>;
  forks?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["uuid"]["output"];
  openIssues?: Maybe<Scalars["Int"]["output"]>;
  stars?: Maybe<Scalars["Int"]["output"]>;
  /** An object relationship */
  tool?: Maybe<Tools>;
  toolId?: Maybe<Scalars["uuid"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by aggregate values of table "tool_data" */
export type ToolDataAggregateOrderBy = {
  avg?: InputMaybe<ToolDataAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ToolDataMaxOrderBy>;
  min?: InputMaybe<ToolDataMinOrderBy>;
  stddev?: InputMaybe<ToolDataStddevOrderBy>;
  stddevPop?: InputMaybe<ToolDataStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ToolDataStddevSampOrderBy>;
  sum?: InputMaybe<ToolDataSumOrderBy>;
  varPop?: InputMaybe<ToolDataVarPopOrderBy>;
  varSamp?: InputMaybe<ToolDataVarSampOrderBy>;
  variance?: InputMaybe<ToolDataVarianceOrderBy>;
};

/** order by avg() on columns of table "tool_data" */
export type ToolDataAvgOrderBy = {
  downloads?: InputMaybe<OrderBy>;
  forks?: InputMaybe<OrderBy>;
  openIssues?: InputMaybe<OrderBy>;
  stars?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "tool_data". All fields are combined with a logical 'AND'. */
export type ToolDataBoolExp = {
  _and?: InputMaybe<Array<ToolDataBoolExp>>;
  _not?: InputMaybe<ToolDataBoolExp>;
  _or?: InputMaybe<Array<ToolDataBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  downloads?: InputMaybe<IntComparisonExp>;
  forks?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  openIssues?: InputMaybe<IntComparisonExp>;
  stars?: InputMaybe<IntComparisonExp>;
  tool?: InputMaybe<ToolsBoolExp>;
  toolId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** order by max() on columns of table "tool_data" */
export type ToolDataMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  downloads?: InputMaybe<OrderBy>;
  forks?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  openIssues?: InputMaybe<OrderBy>;
  stars?: InputMaybe<OrderBy>;
  toolId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "tool_data" */
export type ToolDataMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  downloads?: InputMaybe<OrderBy>;
  forks?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  openIssues?: InputMaybe<OrderBy>;
  stars?: InputMaybe<OrderBy>;
  toolId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "tool_data". */
export type ToolDataOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  downloads?: InputMaybe<OrderBy>;
  forks?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  openIssues?: InputMaybe<OrderBy>;
  stars?: InputMaybe<OrderBy>;
  tool?: InputMaybe<ToolsOrderBy>;
  toolId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "tool_data" */
export enum ToolDataSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Downloads = "downloads",
  /** column name */
  Forks = "forks",
  /** column name */
  Id = "id",
  /** column name */
  OpenIssues = "openIssues",
  /** column name */
  Stars = "stars",
  /** column name */
  ToolId = "toolId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** order by stddev() on columns of table "tool_data" */
export type ToolDataStddevOrderBy = {
  downloads?: InputMaybe<OrderBy>;
  forks?: InputMaybe<OrderBy>;
  openIssues?: InputMaybe<OrderBy>;
  stars?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "tool_data" */
export type ToolDataStddevPopOrderBy = {
  downloads?: InputMaybe<OrderBy>;
  forks?: InputMaybe<OrderBy>;
  openIssues?: InputMaybe<OrderBy>;
  stars?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "tool_data" */
export type ToolDataStddevSampOrderBy = {
  downloads?: InputMaybe<OrderBy>;
  forks?: InputMaybe<OrderBy>;
  openIssues?: InputMaybe<OrderBy>;
  stars?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "tool_data" */
export type ToolDataStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ToolDataStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ToolDataStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  downloads?: InputMaybe<Scalars["Int"]["input"]>;
  forks?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  openIssues?: InputMaybe<Scalars["Int"]["input"]>;
  stars?: InputMaybe<Scalars["Int"]["input"]>;
  toolId?: InputMaybe<Scalars["uuid"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** order by sum() on columns of table "tool_data" */
export type ToolDataSumOrderBy = {
  downloads?: InputMaybe<OrderBy>;
  forks?: InputMaybe<OrderBy>;
  openIssues?: InputMaybe<OrderBy>;
  stars?: InputMaybe<OrderBy>;
};

/** order by varPop() on columns of table "tool_data" */
export type ToolDataVarPopOrderBy = {
  downloads?: InputMaybe<OrderBy>;
  forks?: InputMaybe<OrderBy>;
  openIssues?: InputMaybe<OrderBy>;
  stars?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "tool_data" */
export type ToolDataVarSampOrderBy = {
  downloads?: InputMaybe<OrderBy>;
  forks?: InputMaybe<OrderBy>;
  openIssues?: InputMaybe<OrderBy>;
  stars?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "tool_data" */
export type ToolDataVarianceOrderBy = {
  downloads?: InputMaybe<OrderBy>;
  forks?: InputMaybe<OrderBy>;
  openIssues?: InputMaybe<OrderBy>;
  stars?: InputMaybe<OrderBy>;
};

/** columns and relationships of "tool_tags" */
export type ToolTags = {
  __typename?: "ToolTags";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  creationType: Scalars["Int"]["output"];
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  tag: Tags;
  tagId: Scalars["uuid"]["output"];
  /** An object relationship */
  tool: Tools;
  toolId: Scalars["uuid"]["output"];
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by aggregate values of table "tool_tags" */
export type ToolTagsAggregateOrderBy = {
  avg?: InputMaybe<ToolTagsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ToolTagsMaxOrderBy>;
  min?: InputMaybe<ToolTagsMinOrderBy>;
  stddev?: InputMaybe<ToolTagsStddevOrderBy>;
  stddevPop?: InputMaybe<ToolTagsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ToolTagsStddevSampOrderBy>;
  sum?: InputMaybe<ToolTagsSumOrderBy>;
  varPop?: InputMaybe<ToolTagsVarPopOrderBy>;
  varSamp?: InputMaybe<ToolTagsVarSampOrderBy>;
  variance?: InputMaybe<ToolTagsVarianceOrderBy>;
};

/** order by avg() on columns of table "tool_tags" */
export type ToolTagsAvgOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "tool_tags". All fields are combined with a logical 'AND'. */
export type ToolTagsBoolExp = {
  _and?: InputMaybe<Array<ToolTagsBoolExp>>;
  _not?: InputMaybe<ToolTagsBoolExp>;
  _or?: InputMaybe<Array<ToolTagsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  creationType?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  tag?: InputMaybe<TagsBoolExp>;
  tagId?: InputMaybe<UuidComparisonExp>;
  tool?: InputMaybe<ToolsBoolExp>;
  toolId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** order by max() on columns of table "tool_tags" */
export type ToolTagsMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  creationType?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tagId?: InputMaybe<OrderBy>;
  toolId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "tool_tags" */
export type ToolTagsMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  creationType?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tagId?: InputMaybe<OrderBy>;
  toolId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "tool_tags". */
export type ToolTagsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  creationType?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tag?: InputMaybe<TagsOrderBy>;
  tagId?: InputMaybe<OrderBy>;
  tool?: InputMaybe<ToolsOrderBy>;
  toolId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "tool_tags" */
export enum ToolTagsSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  CreationType = "creationType",
  /** column name */
  Id = "id",
  /** column name */
  TagId = "tagId",
  /** column name */
  ToolId = "toolId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** order by stddev() on columns of table "tool_tags" */
export type ToolTagsStddevOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "tool_tags" */
export type ToolTagsStddevPopOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "tool_tags" */
export type ToolTagsStddevSampOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "tool_tags" */
export type ToolTagsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ToolTagsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ToolTagsStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  creationType?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  tagId?: InputMaybe<Scalars["uuid"]["input"]>;
  toolId?: InputMaybe<Scalars["uuid"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** order by sum() on columns of table "tool_tags" */
export type ToolTagsSumOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** order by varPop() on columns of table "tool_tags" */
export type ToolTagsVarPopOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "tool_tags" */
export type ToolTagsVarSampOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "tool_tags" */
export type ToolTagsVarianceOrderBy = {
  creationType?: InputMaybe<OrderBy>;
};

/** columns and relationships of "tools" */
export type Tools = {
  __typename?: "Tools";
  /** An array relationship */
  categoryTools: Array<CategoryTools>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  createdBy?: Maybe<Scalars["uuid"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  documentationUrl?: Maybe<Scalars["String"]["output"]>;
  hasFreeVersion?: Maybe<Scalars["Boolean"]["output"]>;
  hydratedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  iconIdentifier?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  isArchived?: Maybe<Scalars["Boolean"]["output"]>;
  isSelfHostable?: Maybe<Scalars["Boolean"]["output"]>;
  license?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  ogData?: Maybe<Scalars["jsonb"]["output"]>;
  repositoryUrl?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  stackTools: Array<StackTools>;
  /** An array relationship */
  toolData: Array<ToolData>;
  /** An array relationship */
  toolTags: Array<ToolTags>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  updatedBy?: Maybe<Scalars["uuid"]["output"]>;
  /** An object relationship */
  user?: Maybe<Users>;
  /** An object relationship */
  userByUpdatedBy?: Maybe<Users>;
  websiteUrl?: Maybe<Scalars["String"]["output"]>;
};


/** columns and relationships of "tools" */
export type ToolsCategoryToolsArgs = {
  distinctOn?: InputMaybe<Array<CategoryToolsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryToolsOrderBy>>;
  where?: InputMaybe<CategoryToolsBoolExp>;
};


/** columns and relationships of "tools" */
export type ToolsOgDataArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};


/** columns and relationships of "tools" */
export type ToolsStackToolsArgs = {
  distinctOn?: InputMaybe<Array<StackToolsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<StackToolsOrderBy>>;
  where?: InputMaybe<StackToolsBoolExp>;
};


/** columns and relationships of "tools" */
export type ToolsToolDataArgs = {
  distinctOn?: InputMaybe<Array<ToolDataSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ToolDataOrderBy>>;
  where?: InputMaybe<ToolDataBoolExp>;
};


/** columns and relationships of "tools" */
export type ToolsToolTagsArgs = {
  distinctOn?: InputMaybe<Array<ToolTagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ToolTagsOrderBy>>;
  where?: InputMaybe<ToolTagsBoolExp>;
};

/** order by aggregate values of table "tools" */
export type ToolsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ToolsMaxOrderBy>;
  min?: InputMaybe<ToolsMinOrderBy>;
};

/** Boolean expression to filter rows from the table "tools". All fields are combined with a logical 'AND'. */
export type ToolsBoolExp = {
  _and?: InputMaybe<Array<ToolsBoolExp>>;
  _not?: InputMaybe<ToolsBoolExp>;
  _or?: InputMaybe<Array<ToolsBoolExp>>;
  categoryTools?: InputMaybe<CategoryToolsBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  createdBy?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  documentationUrl?: InputMaybe<StringComparisonExp>;
  hasFreeVersion?: InputMaybe<BooleanComparisonExp>;
  hydratedAt?: InputMaybe<TimestamptzComparisonExp>;
  iconIdentifier?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isArchived?: InputMaybe<BooleanComparisonExp>;
  isSelfHostable?: InputMaybe<BooleanComparisonExp>;
  license?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  ogData?: InputMaybe<JsonbComparisonExp>;
  repositoryUrl?: InputMaybe<StringComparisonExp>;
  stackTools?: InputMaybe<StackToolsBoolExp>;
  toolData?: InputMaybe<ToolDataBoolExp>;
  toolTags?: InputMaybe<ToolTagsBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  updatedBy?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userByUpdatedBy?: InputMaybe<UsersBoolExp>;
  websiteUrl?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "tools" */
export type ToolsMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  documentationUrl?: InputMaybe<OrderBy>;
  hydratedAt?: InputMaybe<OrderBy>;
  iconIdentifier?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  license?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  repositoryUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  websiteUrl?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "tools" */
export type ToolsMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  documentationUrl?: InputMaybe<OrderBy>;
  hydratedAt?: InputMaybe<OrderBy>;
  iconIdentifier?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  license?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  repositoryUrl?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  websiteUrl?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "tools". */
export type ToolsOrderBy = {
  categoryToolsAggregate?: InputMaybe<CategoryToolsAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  documentationUrl?: InputMaybe<OrderBy>;
  hasFreeVersion?: InputMaybe<OrderBy>;
  hydratedAt?: InputMaybe<OrderBy>;
  iconIdentifier?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isArchived?: InputMaybe<OrderBy>;
  isSelfHostable?: InputMaybe<OrderBy>;
  license?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  ogData?: InputMaybe<OrderBy>;
  repositoryUrl?: InputMaybe<OrderBy>;
  stackToolsAggregate?: InputMaybe<StackToolsAggregateOrderBy>;
  toolDataAggregate?: InputMaybe<ToolDataAggregateOrderBy>;
  toolTagsAggregate?: InputMaybe<ToolTagsAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  updatedBy?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userByUpdatedBy?: InputMaybe<UsersOrderBy>;
  websiteUrl?: InputMaybe<OrderBy>;
};

/** select columns of table "tools" */
export enum ToolsSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  CreatedBy = "createdBy",
  /** column name */
  Description = "description",
  /** column name */
  DocumentationUrl = "documentationUrl",
  /** column name */
  HasFreeVersion = "hasFreeVersion",
  /** column name */
  HydratedAt = "hydratedAt",
  /** column name */
  IconIdentifier = "iconIdentifier",
  /** column name */
  Id = "id",
  /** column name */
  IsArchived = "isArchived",
  /** column name */
  IsSelfHostable = "isSelfHostable",
  /** column name */
  License = "license",
  /** column name */
  Name = "name",
  /** column name */
  OgData = "ogData",
  /** column name */
  RepositoryUrl = "repositoryUrl",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UpdatedBy = "updatedBy",
  /** column name */
  WebsiteUrl = "websiteUrl"
}

/** Streaming cursor of the table "tools" */
export type ToolsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ToolsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ToolsStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  createdBy?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  documentationUrl?: InputMaybe<Scalars["String"]["input"]>;
  hasFreeVersion?: InputMaybe<Scalars["Boolean"]["input"]>;
  hydratedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  iconIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isArchived?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSelfHostable?: InputMaybe<Scalars["Boolean"]["input"]>;
  license?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  ogData?: InputMaybe<Scalars["jsonb"]["input"]>;
  repositoryUrl?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  updatedBy?: InputMaybe<Scalars["uuid"]["input"]>;
  websiteUrl?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "Users";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  media?: Maybe<Medias>;
  profilePictureId?: Maybe<Scalars["uuid"]["output"]>;
  /** An array relationship */
  stacks: Array<Stacks>;
  /** An array relationship */
  tools: Array<Tools>;
  /** An array relationship */
  toolsByUpdatedBy: Array<Tools>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  username: Scalars["String"]["output"];
};


/** columns and relationships of "users" */
export type UsersStacksArgs = {
  distinctOn?: InputMaybe<Array<StacksSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<StacksOrderBy>>;
  where?: InputMaybe<StacksBoolExp>;
};


/** columns and relationships of "users" */
export type UsersToolsArgs = {
  distinctOn?: InputMaybe<Array<ToolsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
  where?: InputMaybe<ToolsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersToolsByUpdatedByArgs = {
  distinctOn?: InputMaybe<Array<ToolsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
  where?: InputMaybe<ToolsBoolExp>;
};

/** order by aggregate values of table "users" */
export type UsersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UsersMaxOrderBy>;
  min?: InputMaybe<UsersMinOrderBy>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  media?: InputMaybe<MediasBoolExp>;
  profilePictureId?: InputMaybe<UuidComparisonExp>;
  stacks?: InputMaybe<StacksBoolExp>;
  tools?: InputMaybe<ToolsBoolExp>;
  toolsByUpdatedBy?: InputMaybe<ToolsBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "users" */
export type UsersMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profilePictureId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "users" */
export type UsersMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  profilePictureId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  media?: InputMaybe<MediasOrderBy>;
  profilePictureId?: InputMaybe<OrderBy>;
  stacksAggregate?: InputMaybe<StacksAggregateOrderBy>;
  toolsAggregate?: InputMaybe<ToolsAggregateOrderBy>;
  toolsByUpdatedByAggregate?: InputMaybe<ToolsAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  ProfilePictureId = "profilePictureId",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  Username = "username"
}

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  profilePictureId?: InputMaybe<Scalars["uuid"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categoriesByPk?: Maybe<Categories>;
  /** An array relationship */
  categoryTags: Array<CategoryTags>;
  /** fetch data from the table: "category_tags" using primary key columns */
  categoryTagsByPk?: Maybe<CategoryTags>;
  /** An array relationship */
  categoryTools: Array<CategoryTools>;
  /** fetch data from the table: "category_tools" using primary key columns */
  categoryToolsByPk?: Maybe<CategoryTools>;
  /** fetch data from the table: "medias" */
  medias: Array<Medias>;
  /** fetch data from the table: "medias" using primary key columns */
  mediasByPk?: Maybe<Medias>;
  /** An array relationship */
  stackTools: Array<StackTools>;
  /** fetch data from the table: "stack_tools" using primary key columns */
  stackToolsByPk?: Maybe<StackTools>;
  /** An array relationship */
  stacks: Array<Stacks>;
  /** fetch data from the table: "stacks" using primary key columns */
  stacksByPk?: Maybe<Stacks>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch data from the table: "tags" using primary key columns */
  tagsByPk?: Maybe<Tags>;
  /** An array relationship */
  toolData: Array<ToolData>;
  /** fetch data from the table: "tool_data" using primary key columns */
  toolDataByPk?: Maybe<ToolData>;
  /** An array relationship */
  toolTags: Array<ToolTags>;
  /** fetch data from the table: "tool_tags" using primary key columns */
  toolTagsByPk?: Maybe<ToolTags>;
  /** An array relationship */
  tools: Array<Tools>;
  /** fetch data from the table: "tools" using primary key columns */
  toolsByPk?: Maybe<Tools>;
  /** An array relationship */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
};


export type Query_RootCategoriesArgs = {
  distinctOn?: InputMaybe<Array<CategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
  where?: InputMaybe<CategoriesBoolExp>;
};


export type Query_RootCategoriesByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Query_RootCategoryTagsArgs = {
  distinctOn?: InputMaybe<Array<CategoryTagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryTagsOrderBy>>;
  where?: InputMaybe<CategoryTagsBoolExp>;
};


export type Query_RootCategoryTagsByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Query_RootCategoryToolsArgs = {
  distinctOn?: InputMaybe<Array<CategoryToolsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryToolsOrderBy>>;
  where?: InputMaybe<CategoryToolsBoolExp>;
};


export type Query_RootCategoryToolsByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Query_RootMediasArgs = {
  distinctOn?: InputMaybe<Array<MediasSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<MediasOrderBy>>;
  where?: InputMaybe<MediasBoolExp>;
};


export type Query_RootMediasByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Query_RootStackToolsArgs = {
  distinctOn?: InputMaybe<Array<StackToolsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<StackToolsOrderBy>>;
  where?: InputMaybe<StackToolsBoolExp>;
};


export type Query_RootStackToolsByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Query_RootStacksArgs = {
  distinctOn?: InputMaybe<Array<StacksSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<StacksOrderBy>>;
  where?: InputMaybe<StacksBoolExp>;
};


export type Query_RootStacksByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Query_RootTagsArgs = {
  distinctOn?: InputMaybe<Array<TagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
};


export type Query_RootTagsByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Query_RootToolDataArgs = {
  distinctOn?: InputMaybe<Array<ToolDataSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ToolDataOrderBy>>;
  where?: InputMaybe<ToolDataBoolExp>;
};


export type Query_RootToolDataByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Query_RootToolTagsArgs = {
  distinctOn?: InputMaybe<Array<ToolTagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ToolTagsOrderBy>>;
  where?: InputMaybe<ToolTagsBoolExp>;
};


export type Query_RootToolTagsByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Query_RootToolsArgs = {
  distinctOn?: InputMaybe<Array<ToolsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
  where?: InputMaybe<ToolsBoolExp>;
};


export type Query_RootToolsByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Query_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootUsersByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categoriesByPk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categoriesStream: Array<Categories>;
  /** An array relationship */
  categoryTags: Array<CategoryTags>;
  /** fetch data from the table: "category_tags" using primary key columns */
  categoryTagsByPk?: Maybe<CategoryTags>;
  /** fetch data from the table in a streaming manner: "category_tags" */
  categoryTagsStream: Array<CategoryTags>;
  /** An array relationship */
  categoryTools: Array<CategoryTools>;
  /** fetch data from the table: "category_tools" using primary key columns */
  categoryToolsByPk?: Maybe<CategoryTools>;
  /** fetch data from the table in a streaming manner: "category_tools" */
  categoryToolsStream: Array<CategoryTools>;
  /** fetch data from the table: "medias" */
  medias: Array<Medias>;
  /** fetch data from the table: "medias" using primary key columns */
  mediasByPk?: Maybe<Medias>;
  /** fetch data from the table in a streaming manner: "medias" */
  mediasStream: Array<Medias>;
  /** An array relationship */
  stackTools: Array<StackTools>;
  /** fetch data from the table: "stack_tools" using primary key columns */
  stackToolsByPk?: Maybe<StackTools>;
  /** fetch data from the table in a streaming manner: "stack_tools" */
  stackToolsStream: Array<StackTools>;
  /** An array relationship */
  stacks: Array<Stacks>;
  /** fetch data from the table: "stacks" using primary key columns */
  stacksByPk?: Maybe<Stacks>;
  /** fetch data from the table in a streaming manner: "stacks" */
  stacksStream: Array<Stacks>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch data from the table: "tags" using primary key columns */
  tagsByPk?: Maybe<Tags>;
  /** fetch data from the table in a streaming manner: "tags" */
  tagsStream: Array<Tags>;
  /** An array relationship */
  toolData: Array<ToolData>;
  /** fetch data from the table: "tool_data" using primary key columns */
  toolDataByPk?: Maybe<ToolData>;
  /** fetch data from the table in a streaming manner: "tool_data" */
  toolDataStream: Array<ToolData>;
  /** An array relationship */
  toolTags: Array<ToolTags>;
  /** fetch data from the table: "tool_tags" using primary key columns */
  toolTagsByPk?: Maybe<ToolTags>;
  /** fetch data from the table in a streaming manner: "tool_tags" */
  toolTagsStream: Array<ToolTags>;
  /** An array relationship */
  tools: Array<Tools>;
  /** fetch data from the table: "tools" using primary key columns */
  toolsByPk?: Maybe<Tools>;
  /** fetch data from the table in a streaming manner: "tools" */
  toolsStream: Array<Tools>;
  /** An array relationship */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  usersStream: Array<Users>;
};


export type Subscription_RootCategoriesArgs = {
  distinctOn?: InputMaybe<Array<CategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
  where?: InputMaybe<CategoriesBoolExp>;
};


export type Subscription_RootCategoriesByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Subscription_RootCategoriesStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<CategoriesStreamCursorInput>>;
  where?: InputMaybe<CategoriesBoolExp>;
};


export type Subscription_RootCategoryTagsArgs = {
  distinctOn?: InputMaybe<Array<CategoryTagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryTagsOrderBy>>;
  where?: InputMaybe<CategoryTagsBoolExp>;
};


export type Subscription_RootCategoryTagsByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Subscription_RootCategoryTagsStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<CategoryTagsStreamCursorInput>>;
  where?: InputMaybe<CategoryTagsBoolExp>;
};


export type Subscription_RootCategoryToolsArgs = {
  distinctOn?: InputMaybe<Array<CategoryToolsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoryToolsOrderBy>>;
  where?: InputMaybe<CategoryToolsBoolExp>;
};


export type Subscription_RootCategoryToolsByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Subscription_RootCategoryToolsStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<CategoryToolsStreamCursorInput>>;
  where?: InputMaybe<CategoryToolsBoolExp>;
};


export type Subscription_RootMediasArgs = {
  distinctOn?: InputMaybe<Array<MediasSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<MediasOrderBy>>;
  where?: InputMaybe<MediasBoolExp>;
};


export type Subscription_RootMediasByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Subscription_RootMediasStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<MediasStreamCursorInput>>;
  where?: InputMaybe<MediasBoolExp>;
};


export type Subscription_RootStackToolsArgs = {
  distinctOn?: InputMaybe<Array<StackToolsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<StackToolsOrderBy>>;
  where?: InputMaybe<StackToolsBoolExp>;
};


export type Subscription_RootStackToolsByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Subscription_RootStackToolsStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<StackToolsStreamCursorInput>>;
  where?: InputMaybe<StackToolsBoolExp>;
};


export type Subscription_RootStacksArgs = {
  distinctOn?: InputMaybe<Array<StacksSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<StacksOrderBy>>;
  where?: InputMaybe<StacksBoolExp>;
};


export type Subscription_RootStacksByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Subscription_RootStacksStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<StacksStreamCursorInput>>;
  where?: InputMaybe<StacksBoolExp>;
};


export type Subscription_RootTagsArgs = {
  distinctOn?: InputMaybe<Array<TagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
};


export type Subscription_RootTagsByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Subscription_RootTagsStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<TagsStreamCursorInput>>;
  where?: InputMaybe<TagsBoolExp>;
};


export type Subscription_RootToolDataArgs = {
  distinctOn?: InputMaybe<Array<ToolDataSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ToolDataOrderBy>>;
  where?: InputMaybe<ToolDataBoolExp>;
};


export type Subscription_RootToolDataByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Subscription_RootToolDataStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<ToolDataStreamCursorInput>>;
  where?: InputMaybe<ToolDataBoolExp>;
};


export type Subscription_RootToolTagsArgs = {
  distinctOn?: InputMaybe<Array<ToolTagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ToolTagsOrderBy>>;
  where?: InputMaybe<ToolTagsBoolExp>;
};


export type Subscription_RootToolTagsByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Subscription_RootToolTagsStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<ToolTagsStreamCursorInput>>;
  where?: InputMaybe<ToolTagsBoolExp>;
};


export type Subscription_RootToolsArgs = {
  distinctOn?: InputMaybe<Array<ToolsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ToolsOrderBy>>;
  where?: InputMaybe<ToolsBoolExp>;
};


export type Subscription_RootToolsByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Subscription_RootToolsStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<ToolsStreamCursorInput>>;
  where?: InputMaybe<ToolsBoolExp>;
};


export type Subscription_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersByPkArgs = {
  id: Scalars["uuid"]["input"];
};


export type Subscription_RootUsersStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};

export type GetToolsForPreviewQueryVariables = Exact<{
  limit?: Scalars["Int"]["input"];
  offset?: Scalars["Int"]["input"];
}>;


export type GetToolsForPreviewQuery = { __typename?: "query_root", tools: Array<{ __typename?: "Tools", id: any, name: string, description?: string | null, iconIdentifier?: string | null, toolData: Array<{ __typename?: "ToolData", stars?: number | null }> }> };

export type GetToolByIdQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;


export type GetToolByIdQuery = { __typename?: "query_root", toolsByPk?: { __typename?: "Tools", id: any, name: string, description?: string | null, iconIdentifier?: string | null, ogData?: any | null, license?: string | null, websiteUrl?: string | null, documentationUrl?: string | null, repositoryUrl?: string | null, toolData: Array<{ __typename?: "ToolData", id: any, stars?: number | null, openIssues?: number | null, downloads?: number | null, forks?: number | null }>, categoryTools: Array<{ __typename?: "CategoryTools", id: any, category?: { __typename?: "Categories", id: any, name: string } | null }> } | null };
